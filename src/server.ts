
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { typeDefs, resolvers } from './graphql/index';

(async () => {

const app = express();
const httpServer = http.createServer(app); 

const server = new ApolloServer({
  typeDefs,
  resolvers
}); 

  await server.start()
  
  app.use(
  '/',
  cors(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token })
  })
);

await new Promise<void>((resolve) => {
  httpServer.listen({ port: 7000 }, resolve)
}) 
console.log(`server on`)

})();