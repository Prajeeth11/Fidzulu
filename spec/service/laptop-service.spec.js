laptopService = require('../../src/services/laptop-service')
const fs = require('fs');
var assert = require('assert');
expectedValue = require('../../src/mock-data/Laptopsjson.json')


describe('Laptops Service', () => {
    it('Should retrieve the laptops', () => {
      const result =laptopService.getLaptops("IN"); // Call a function from your service
      assert.notStrictEqual(result, expectedValue); // Assert the expected result
    });
});