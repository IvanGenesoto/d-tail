module.exports = function createIndexesById(_entityRoot) {

  return _entityRoot.id.reduce(append, [])

  function append(indexesById, id, index) {
    indexesById[id] = index
    return indexesById
  }
}
