module.exports = function Vehicles(
  _vehicles = {
    status: 'operational',
    model: 'delorean',
    district: [0],
    zone: [0],
    seats: [2],
    driver: [0],
    masterKeyHolders: [[0]],
    keyHolders: [[0]],
    welcomes: [[0]],
    passengers: [[0]],
    x: [0.1],
    y: [0.1],
    width: [268],
    height: [80],
    direction: ['right'],
    previousDirection: ['right'],
    speed: [0],
    maxSpeed: [80],
    slowing: [false],
    falling: [false],
    acceleration: [4],
    deceleration: [10],
    armor: [0],
    weight: [0],
    element: ['img'],
    elementID: [''],
    src: ['images/vehicles/delorean.png']
  }
) {

  const $ = require

  const vehiclesPrototype = $('./entities-prototype')(_vehicles)

  return Object.create(vehiclesPrototype)
}
