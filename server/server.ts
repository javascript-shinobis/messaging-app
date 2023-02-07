import { config } from "dotenv";
config();

import fastify from "fastify";

const app = fastify();

app.listen({ port: parseInt(process.env.PORT!) });

const object = {
  name: "Bhanu",
  lastName: "Pratap",
  age: 23,
  name1: "Abhishek",
  lastName1: "Mishra",
  age1: 23,
};
