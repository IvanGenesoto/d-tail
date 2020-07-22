module.exports = function createEntityCountsByDistrictId() {

  const _entityCountsByDistrictId = {
    players: [0],
    characters: [0],
    vehicles: [0],
    rooms: [0]
  }

  return {

    get() {
      const entityType = this.entityType
      const districtId = this.districtId
      return _entityCountsByDistrictId[entityType][districtId]
    },

    increment() {
      const entityType = this.entityType
      const districtId = this.districtId
      if (!_entityCountsByDistrictId[entityType][districtId]) {
        _entityCountsByDistrictId[entityType][districtId] = 0
      }
      return ++_entityCountsByDistrictId[entityType][districtId]
    }
  }
}
