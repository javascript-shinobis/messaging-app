import { FastifyInstance } from "fastify";
import { StreamChat } from "stream-chat";

const streamChat = StreamChat.getInstance(
  process.env.STREAM_API_KEY!,
  process.env.STREAM_PRIVATE_API_KEY
);

export async function userRoutes(app: FastifyInstance) {
  app.post<{ Body: { id: string; name: string; image?: string } }>(
    "/signup",
    async (req, res) => {
      const { id, name, image } = req.body;
      if (id == null || id === "" || name == null || name === "") {
        return res
          .status(400)
          .send({ errorMessage: `Please pass valid user signup parameters!` });
      }

      //queryUser() allows us to query about our users
      const existingUsers = await streamChat.queryUsers({ id });
      if (existingUsers.users.length > 0) {
        return res.status(400).send({ errorMessage: "User Id is taken." });
      }

      // For creating or updating user we use upsertUser
      const response = await streamChat.upsertUser({ id, name, image });
      return response.users[id];
    }
  );
}
