import { FastifyInstance } from 'fastify';
import { StreamChat } from 'stream-chat';

const streamChat = StreamChat.getInstance(
  process.env.STREAM_API_KEY!,
  process.env.STREAM_PRIVATE_API_KEY
);

// to keep track of the relation between user IDs and authentication tokens
const TOKEN_USER_ID_MAP = new Map<string, string>();

export async function userRoutes(app: FastifyInstance) {
  app.post<{
    Body: { id: string; name: string; image?: string; password: string };
  }>('/signup', async (req, res) => {
    try {
      const { id, name, image, password } = req.body;
      if (
        id == null ||
        id === ' ' ||
        name == null ||
        name === ' ' ||
        password == null ||
        password === ' '
      ) {
        return await res.status(400).send({
          errorMessage: `Please pass valid user signup parameters!`,
        });
      }

      // queryUser() allows us to query about our users
      const existingUsers = await streamChat.queryUsers({ id });
      if (existingUsers.users.length > 0) {
        return await res
          .status(400)
          .send({ errorMessage: 'User Id is taken.' });
      }

      // For creating or updating user we use upsertUser
      const response = await streamChat.upsertUser({
        id,
        name,
        image,
        password,
      });
      return response.users[id];
    } catch (error) {
      return res.status(500).send({
        errorMessage: `Unable to create a new user!`,
      });
    }
  });

  app.post<{ Body: { id: string; password: string } }>(
    '/login',
    async (req, res) => {
      const { id, password } = req.body;
      if (id == null || id === ' ' || password == null || password === ' ') {
        return res.status(400).send({
          errorMessage: `Please provde a valid user login credential!!`,
        });
      }

      const {
        users: [user],
      } = await streamChat.queryUsers({ id, password });

      if (user == null) return res.status(401).send();

      const token = streamChat.createToken(id);
      TOKEN_USER_ID_MAP.set(token, user.id);

      return {
        token,
        user: {
          name: user.name,
          id: user.id,
          image: user.image,
          password: user.password,
        },
      };
    }
  );

  // eslint-disable-next-line consistent-return
  app.post<{ Body: { token: string } }>('/logout', async (req, res) => {
    const { token } = req.body;

    if (!token || token === ' ') return res.status(400).send();

    const id = TOKEN_USER_ID_MAP.get(token);

    if (!id || id === '') return res.status(400).send();

    await streamChat.revokeUserToken(id, new Date());

    TOKEN_USER_ID_MAP.delete(token);
  });
}
