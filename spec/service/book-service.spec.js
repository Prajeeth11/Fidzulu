bookService = require('../../src/services/book-service')
const fs = require('fs');
var assert = require('assert');
expectedValue = require('../../src/mock-data/Booksjson.json')


describe('Book Service', () => {
    it('Should retrieve the books', () => {
      const result =bookService.getBooks("IN"); // Call a function from your service
      assert.notStrictEqual(result, expectedValue); // Assert the expected result
    });
});