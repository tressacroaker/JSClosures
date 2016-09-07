/*global
describe, it
*/

var cc = require('../ccPractice');
const chai = require('chai');
var expect = chai.expect;

  describe('Closures - Exercise 1', function () {
    it("someFunc should return a function that adds it's input to the next", function () {
      expect(cc.someFunc(1)(2)).to.eql(3)
      expect(cc.someFunc(5)(2)).to.eql(7)
      expect(cc.someFunc(6)(2)).to.eql(8)
    })
  })

  describe('Closures - Exercise 2', function () {
    it("someFunc should return a function that adds it's input to the next", function () {
      cc.counter()
      expect(cc.counter()).to.eql(5)
      cc.counter()
      expect(cc.counter()).to.eql(7)
      cc.counter()
      expect(cc.counter()).to.eql(9)
    })
  })
})
