import fastify from "fastify";
import fisrtRoutes from './route/first';
import dbConnector from './db/db-connector';
const server = fastify({
  logger: true
});
server.register(dbConnector);
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

// 参考
// https://github.com/HospitalRun/hospitalrun-server
// https://snyk.io/advisor/npm-package/fastify/example
// https://github.com/ChainSafe/lodestar/blob/unstable/packages/api/src/utils/client/client.ts
// docker 部署
// https://juejin.cn/post/684490403505348608
// https://juejin.cn/post/7151415587384590366
