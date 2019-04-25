require('chai').should();

const urOrderPls = require('../index.js');

describe('String Order', function() {

  it('should return an empty string when given an empty string', function () {
    urOrderPls('').should.eql('');
  });

  it('should return a string with sorted words', function () {
    urOrderPls('is2 Thi1s T4est 3a').should.eql('Thi1s is2 3a T4est');
  });

  it('should return a string with sorted words', function () {
    urOrderPls('4of Fo1r pe6ople g3ood th5e the2').should.eql('Fo1r the2 g3ood 4of th5e pe6ople');
  });

});

