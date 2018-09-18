function checkValues(bikeObject){
  var errors = {}
  if(bikeObject.price < 0)  errors.price = {msg: 'The price must be postive '}
  if(bikeObject.quantity < 0)  errors.quantity = {msg: 'The quantity must be postive'}
  return errors
}
module.exports = checkValues
