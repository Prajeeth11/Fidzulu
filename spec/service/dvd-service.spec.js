DvdService = require('../../src/services/dvd-service')
const fs = require('fs');
var assert = require('assert');
expectedValue = require('../../src/mock-data/DVDsjson.json')


describe('DVD Service', () => {
    it('Should retrieve the DVD', () => {
      const result =DvdService.getDVDs("IN"); // Call a function from your service
      assert.notStrictEqual(result, expectedValue); // Assert the expected result
    });
});