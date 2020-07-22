module.exports = function createPrimitiveAttributeAccessor({
  _attribute, attributeName, caller, entityType, typeofDefaultValue, indexesById, modules
}) {

  return Object.freeze({

    get() {
      const index = indexesById[caller.id]
      return _attribute[index]
    },

    set(value) {
      const {id} = value || {}
      if (id) value = id
      modules.initialize.filter.typeofValue(value, typeofDefaultValue, attributeName, entityType)
      const index = indexesById[caller.id]
      _attribute[index] = value
    }
  })
}
