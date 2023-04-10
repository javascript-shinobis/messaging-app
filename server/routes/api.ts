import { FastifyInstance } from 'fastify';

export async function healthCheck(app: FastifyInstance) {
  app.get('/health-check', async (req, res) => {
    return res.status(200).send({
      data: `Messaging server is up!`,
    });
  });
}
