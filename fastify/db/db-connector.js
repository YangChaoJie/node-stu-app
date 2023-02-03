"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = require("fastify-plugin");
const mongodb_1 = require("@fastify/mongodb");
/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */
async function dbConnector(fastify, options) {
    fastify.register(mongodb_1.default, {
        url: 'mongodb://localhost:27017/nodetest'
    });
}
exports.default = (0, fastify_plugin_1.default)(dbConnector);
