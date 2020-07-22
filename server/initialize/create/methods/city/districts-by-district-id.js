module.exports = function createDistrictsByDistrictId(modules) {
  const {filter} = modules.initialize

  const _districtsByDistrictId = [0]

  return {

    get: (districtId) => _districtsByDistrictId[districtId],

    add(district) {
      const districtId = this.id // #debug: district.id ??
      filter.typeofValue(districtId, 'integer', '', 'id', 'district')
      filter.typeofValue(district, false, 'object', '', 'district')
      _districtsByDistrictId[districtId] = district
    }
  }
}
