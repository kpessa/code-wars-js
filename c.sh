#!/bin/bash

text="function $2() {
// write your code here

}

module.exports.$2 = $2;"

echo "$text" > ./$1.js

test="const assert = require('assert');

describe('$2', function () {
	const $2 = require('./$1').$2;
	it('First test', function () {
    assert.equal($2(),true);
	});

  it('Second test', function () {
    assert.equal($2(),true);
	});

  it('Third test', function () {
		assert.equal($2(),true);
	});
});"

echo "$test" > ./$1.test.js

package='{
  "name": "code-wars-js",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha --watch './$1.test.js'"
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