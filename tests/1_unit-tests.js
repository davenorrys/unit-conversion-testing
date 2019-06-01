/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      const input = '3.2L'
      assert.equal(convertHandler.getNum(input), '3.2')
      
      done();
    });
    
    test('Fractional Input', function(done) {
      const input = '1/4L'
      assert.equal(convertHandler.getNum(input), '1/4')
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      const input = '10.5/2L'
      assert.equal(convertHandler.getNum(input), '10.5/2')
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      const input = '3/2/2L'
      assert.equal(convertHandler.getNum(input), false)
      done();
    });
    
    test('No Numerical Input', function(done) {
      const input = 'L'
      assert.equal(convertHandler.getNum(input), false)
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(`1 ${ele}`), ele)
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      const input = '1gag'
      assert.equal(convertHandler.getUnit(input), false)
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
      const expect = ['galons', 'litres', 'miles', 'kilometers', 'pounds', 'kilograms']
      input.forEach((val, i)=>{
        assert.equal(convertHandler.spellOutUnit(val), expect[i])
      })
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'Gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      const input = [5, 'L']
      const expected = 1.3
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    });
    
    test('Mi to Km', function(done) {
      const input = [5, 'Mi']
      const expected = 8.
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    });
    
    test('Km to Mi', function(done) {
      const input = [5, 'KM']
      const expected = 3.1
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    });
    
    test('Lbs to Kg', function(done) {
      const input = [5, 'Lbs']
      const expected = 2.2
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    });
    
    test('Kg to Lbs', function(done) {
      const input = [5, 'KG']
      const expected = 11
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    });
    
  });

});