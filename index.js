require('dotenv').config()
const http = require('http'),
  io = require('socket.io-client')

console.log('process.env.PODIP ', process.env.PODIP)
const socketio = io('http://' + process.env.PODIP + ':' + process.env.SERVER_PORT)

const server = http.createServer((req, res) => {
  console.log('access')
  console.log('socket.connected', socketio.connected)
  const status = socketio.connected ? 200 : 400
  res.writeHead(status)
  res.end()
})

socketio.on('connect', () => {
  console.log('connect')
  console.log('socketio.connected', socketio.connected)
})

socketio.io.on("reconnect", (attempt) => {
  console.log('success reconnect')
  console.log('socketio.connected', socketio.connected)
})

socketio.on("connect_error", () => {
  console.log('connect_error')
  console.log('socketio.connected', socketio.connected)
})

socketio.on('disconnect', reason => {
  console.log('disconnect')
  console.log('reason', reason)
  console.log('socketio.connected', socketio.connected)
})

server.listen(process.env.PORT, () => {
  console.log('env:' + process.env.NODE_ENV)
  console.log('server listening. PORT:' + process.env.PORT)
})