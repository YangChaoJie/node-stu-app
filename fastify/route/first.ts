import { FastifyInstance } from "fastify";

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function fisrtRoutes(fastify: FastifyInstance, options: Object) {
  const collection = fastify.mongo.db?.collection('userlist');
  console.log('collection----', collection);
 
  fastify.get('/home', async (request, reply) => {
    return { hello: 'world1' }
  })

  fastify.get('/userlist', async (req, res) =>{
    const result = collection?.find().toArray();
    return result
  });
}

export default fisrtRoutes
