"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const first_1 = require("./route/first");
const db_connector_1 = require("./db/db-connector");
const server = (0, fastify_1.default)({
    logger: true
});
server.register(db_connector_1.default);
server.register(first_1.default);
server.get('/', async (request, reply) => {
    return { hello: 'world' };
});
// Run the server!
const start = async () => {
    try {
        await server.listen({ port: 3000 });
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
