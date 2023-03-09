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
        return res.status(400).send();
      }
    }
  );
}
