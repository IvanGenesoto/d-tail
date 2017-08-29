module.exports = function createDistrictIDsByEntityID($, _) {

  const _districtIDsByEntityID = {
    players: [0],
    characters: [0],
    vehicles: [0],
    rooms: [0]
  }

  return {

    get(id) {
      const entityType = this.entityType
      return _districtIDsByEntityID[entityType][id]
    },

    add(id) {
      const districtID = this.districtID
      const entityType = this.entityType
      $(_ + 'filter/typeof-value')(id, true, undefined, '', entityType)
      $(_ + 'filter/typeof-value')(districtID, true, undefined, '', entityType)
      _districtIDsByEntityID[entityType][id] = districtID
    }
  }
}
