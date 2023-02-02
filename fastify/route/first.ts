import { FastifyInstance } from "fastify";

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function fisrtRoutes(fastify: FastifyInstance, options: Object) {
  fastify.get('/home', async (request, reply) => {
    return { hello: 'world' }
  })
}

export default fisrtRoutes
