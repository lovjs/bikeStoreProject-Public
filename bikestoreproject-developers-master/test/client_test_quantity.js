var expect = require('chai').expect
var checkValues = require('../client/views/viewUtilities.js')
var Bike = require('../client/models/bike.js')



var bikeObject = {
color: '',
brand: '',
price: 1.0,
type: '',
quantity: -1.0,
description: '',
tags: ''
}

console.log(checkValues(bikeObject))

describe('Test that there cant be negative values of quantity', function () {
  it('quantity should be postive', function (done) {
    var result = checkValues(bikeObject)
    expect(result.price).to.not.exist
    expect(result.quantity).to.deep.equal({msg: 'The quantity must be postive'})
    done()
  })
})
