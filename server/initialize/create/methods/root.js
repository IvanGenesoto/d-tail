module.exports = function createRootMethods(
  {
    _entityRoot,
    indexesById,
    entityRootType,
    districtId,
    getNextId,
    entityAccessorPrototype,
    rootAccessorPrototype,
    modules
  }
) {

  const {create} = modules.initialize

  return {

    districtId,

    entityType: entityRootType,

    getLength() {
      return _entityRoot.id.length - 1 // #note: #Exclude default entity.
    },

    create() {
      const id = getNextId.call(this)
      const index = create.entity(id, _entityRoot)
      indexesById[id] = index
      const entityAccessor = create.accessor.entity.index(id, entityAccessorPrototype)
      rootAccessorPrototype[id] = entityAccessor
      _entityRoot.district[index] = districtId
      return entityAccessor
    },

    createMultiple(quantity) {
      const entities = []
      while (quantity) {
        const entity = this.create()
        entities.push(entity)
        quantity--
      }
      return entities
    },

    getIdWithAttribute(attributeType, value) {
      const _attributeByIndex = _entityRoot[attributeType]
      const _idByIndex = _entityRoot.id
      const index = _attributeByIndex.indexOf(value)
      return _idByIndex[index]
    }
  }
}
