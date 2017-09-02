module.exports = function initiateCity(
  {latestCityID, districtCount}
) {

  const _cityID = latestCityID.increment()
  if (_cityID > 1) return latestCityID.decrement()

  const _districtCount = districtCount.get()
  if (_districtCount) throw new Error('Positive disctrictCount before city initiation')

  else return districtCount.increment()
}
