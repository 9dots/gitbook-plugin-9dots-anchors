/**
 * Imports
 */

const test = require('tape')
const anchors = require('..')

/**
 * Tests
 */

test('should work', (t) => {
  t.deepEqual(anchors.hooks.page({content: '<a href="test.pdf"/>'}), {content: '<a target="_blank" href="test.pdf"/>'})
  t.end()
})
