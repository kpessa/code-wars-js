#!/bin/bash

text="function $2() {
// write your code here

}

module.exports.$2 = $2;"

echo "$text" > ./katas/$1.js

test="const assert = require('assert');

describe('$2', function () {
	const $2 = require('../katas/$1').$2;
	it('Basic tests', function () {
		assert.equal(1,1);
	});
});"

echo "$test" > ./test/$1.test.js

package='{
  "name": "code-wars-js",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha --watch 'test/$1.test.js'"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "chai": "^4.3.6",
    "mocha": "^10.0.0"
  }
}'

echo "$package" > package.json