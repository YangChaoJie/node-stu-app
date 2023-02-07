import { FastifyInstance } from "fastify";
import { request } from "http";

interface userParam  {
  user: string
}
interface Querystring {
  username: string;
  age: number
}
interface Headers {
  'h-custom': string
}
/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function fisrtRoutes(fastify: FastifyInstance, options: Object) {
  const collection = fastify.mongo.db?.collection('userlist');
  // console.log('collection----', collection);
 
  fastify.get('/home', async (request, reply) => {
    return { hello: 'world1' }
  })

  fastify.get('/userlist', async (req, res) =>{
    const result = collection?.find().toArray();
    return result
  });

  fastify.get('/userlist/:user',async (resquset, reply) => {
    const result = await collection?.findOne({ username: (resquset.params as userParam)?.user })
    console.log('resquest----', resquset.params);
    console.log('result----', result);
    return result
  })

  fastify.get<{ Querystring: Querystring }>('/getuser',async (request, reply) => {
    const { username, age } = request.query
    return `${ username } ${ age } logged in`;
  })

  fastify.get<{ Querystring: Querystring, Header: Headers }>('/auth', {
    preValidation: (request, reply, done) => {
      const { username, age } = request.query
      done(username !== 'admin' ? new Error('Must be admin') : undefined)
    }
  }, async (request, reply) => {
    const { username, age } = request.query
    const customerHeader = request.headers['h-Custom']
    return `${ username } ${ age } logged in`;
  })
}

export default fisrtRoutes
