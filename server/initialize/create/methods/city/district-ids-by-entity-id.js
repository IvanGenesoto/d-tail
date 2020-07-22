module.exports = function createDistrictIdsByEntityId(modules) {
  const {filter} = modules.initialize

  const _districtIdsByEntityId = {
    players: [0],
    characters: [0],
    vehicles: [0],
    rooms: [0]
  }

  return {

    get(id) {
      const entityType = this.entityType
      return _districtIdsByEntityId[entityType][id]
    },

    add(id) {
      const districtId = this.districtId
      const entityType = this.entityType
      filter.typeofValue(id, 'integer', '', 'id', entityType)
      filter.typeofValue(districtId, 'integer', '', 'districtId', entityType)
      _districtIdsByEntityId[entityType][id] = districtId
    }
  }
}
