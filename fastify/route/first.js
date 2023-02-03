"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function fisrtRoutes(fastify, options) {
    fastify.get('/home', async (request, reply) => {
        return { hello: 'world1' };
    });
}
exports.default = fisrtRoutes;
