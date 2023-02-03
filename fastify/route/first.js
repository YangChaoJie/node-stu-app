"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function fisrtRoutes(fastify, options) {
    var _a;
    const collection = (_a = fastify.mongo.db) === null || _a === void 0 ? void 0 : _a.collection('userlist');
    console.log('collection----', collection);
    fastify.get('/home', async (request, reply) => {
        return { hello: 'world1' };
    });
    fastify.get('/userlist', async (req, res) => {
        const result = collection === null || collection === void 0 ? void 0 : collection.find().toArray();
        return result;
    });
}
exports.default = fisrtRoutes;
