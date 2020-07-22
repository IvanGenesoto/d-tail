module.exports = function createPlayerIdsByToken(modules) {
  const {filter} = modules.initialize

  const _playerIdsByToken = {'': 0}

  return {

    get: (token) => _playerIdsByToken[token],

    add(id, token) {
      const entityType = this.entityType
      filter.typeofValue(id, 'integer', '', 'id', entityType)
      filter.typeofValue(token, false, 'string', 'token', entityType)
      _playerIdsByToken[token] = id
    }
  }
}
