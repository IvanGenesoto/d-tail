module.exports = function retrieveDistrict(cityAccessor) {

  const {districtCount, retrievedDistrictCount, districtsByDistrictId, modules} = cityAccessor
  const {initialize} = modules

  const districtId = retrievedDistrictCount.increment()
  if (districtId > districtCount.get()) {
    retrievedDistrictCount.decrement()
    throw new Error('All districts already retrieved')
  }

  let _district = districtsByDistrictId.get(districtId)
  if (_district && _district.id !== districtId) {
    throw new Error(
      '_district.id (' + _district.id + ') does not match districtId (' + districtId + ')'
    )
  }

  _district = initialize.append.attributes(_district, initialize.attributes.districts)
  _district.id = districtId

  Object
    .entries(_district)
    .forEach(([attributeName, _attribute]) => {
      initialize.filter.typeofDefaultValue(
        _attribute, typeof _attribute, attributeName, 'district', 'object'
      )
    })

  return _district
}
