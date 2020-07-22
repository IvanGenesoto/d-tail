module.exports = function createCityAccessor(modules) {
  const {city} = modules.initialize.create.methods

  return Object.freeze({
    statusCode: city.statusCode(),
    districtCount: city.districtCount(),
    retrievedDistrictCount: city.retrievedDistrictCount(),
    districtsByDistrictId: city.districtsByDistrictId(modules),
    entityCounts: city.entityCounts(),
    districtIdsByEntityId: city.districtIdsByEntityId(modules),
    entityCountsByDistrictId: city.entityCountsByDistrictId(),
    modules
  })
}
