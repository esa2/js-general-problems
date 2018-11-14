'use strict'

const solution = module.exports = {}

solution.anagram = word => {
  return word.replace(/[^\w]/g, '').toLowerCase()
}
