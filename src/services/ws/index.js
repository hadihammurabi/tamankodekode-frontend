import Ws from '@adonisjs/websocket-client'

const ws = Ws('ws://localhost:3000', { path: 'ws' })
ws
  .withJwtToken(localStorage.getItem('token'))
  .connect()

export default ws
