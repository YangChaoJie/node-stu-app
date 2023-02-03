import fastify from "fastify";
import fisrtRoutes from './route/first';
const server = fastify({
  logger: true
});

server.register(fisrtRoutes);

server.get('/', async (request, reply) => {
  return { hello: 'world' }
})


// Run the server!
const start = async () => {
  try {
    await server.listen({ port: 3000 })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()
