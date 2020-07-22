module.exports = function createGetNextId({
  entityCounts, districtIdsByEntityId, entityCountsByDistrictId
}) {

  return function getNextId() {
    // "this" = rootAccessorPrototype
    const id = entityCounts.increment.call(this)
    districtIdsByEntityId.add.call(this, id)
    entityCountsByDistrictId.increment.call(this)
    return id
  }
}
