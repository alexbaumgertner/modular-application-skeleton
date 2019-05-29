
const path = require('path')


const jsonServer = require('json-server')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

/**
 * @see https://github.com/typicode/json-server
 */
server.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('JSON Server is running')
})
