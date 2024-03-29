/* eslint-disable import/first */
import { config } from 'dotenv';

config();

import fastify from 'fastify';
import cors from '@fastify/cors';

import { userRoutes } from './routes/users';
import { healthCheck } from './routes/api';

const app = fastify();
app.register(cors, { origin: process.env.CLIENT_URL });

app.register(userRoutes, healthCheck);

// eslint-disable-next-line radix
app.listen({ port: parseInt(process.env.PORT!) });
