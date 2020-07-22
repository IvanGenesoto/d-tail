module.exports = function createDistrictMethods(district) {

  const {players, characters, vehicles, rooms} = district // eslint-disable-line no-unused-vars

  return Object.freeze({

    generateToken() {
      const characterString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const {length} = characterString
      let count = 16
      let token = ''
      while (count) {
        const random = Math.random()
        const float = length * random
        const index = Math.floor(float)
        const character = characterString.charAt(index)
        token += character
        --count
      }
      return token
    },

    handle(socket) {
      const {generateToken} = district
      const socketId = socket.id
      const socketIndex = socketId.slice(-4)
      console.log('connected to socket ' + socketIndex)
      socket.emit('get_token')
      let player
      socket.on('create_player', name => {
        if (!name) return socket.emit('invalid_name')
        const name_ = '' + name
        player = players.create()
        player.socket.set(socketId)
        player.token.set(generateToken())
        player.name.set(name_)
        socket.emit(
          'player',
          {token: player.token.get(), name: player.name.get()},
          true
        )
      })
      socket.on('log_in', token => {
        const {districtId} = players
        const playerId = players.getIdWithAttribute('token', token)
        if (!playerId) return socket.emit('invalid_token')
        player = players[playerId]
        const {districtId: playerDistrictId} = player
        if (playerDistrictId !== districtId) {
          return socket.emit('player_district_id', playerDistrictId)
        }
        player.socket.set(socketId)
        socket.emit(
          'player',
          {token: player.token.get(), name: player.name.get()}
        )
      })
      socket.on('input', input => player.input.set(input))
    }
  })
}
