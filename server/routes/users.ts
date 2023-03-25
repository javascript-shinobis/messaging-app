import { FastifyInstance } from 'fastify';
import { StreamChat } from 'stream-chat';

const streamChat = StreamChat.getInstance(
  process.env.STREAM_API_KEY!,
  process.env.STREAM_PRIVATE_API_KEY
);

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
}
