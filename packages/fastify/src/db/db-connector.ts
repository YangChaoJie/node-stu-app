import fastifyPlugin from 'fastify-plugin';
import fastifyMongo from '@fastify/mongodb';
import { FastifyInstance } from 'fastify';

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */
async function dbConnector(fastify: FastifyInstance, options: any) {
  fastify.register(fastifyMongo, {
    url: 'mongodb://localhost:27017/nodetest'
  })
}

export default fastifyPlugin(dbConnector);
