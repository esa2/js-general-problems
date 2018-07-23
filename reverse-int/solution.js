'use strict'

const solution = module.exports = {}

solution.reverseInt = int => {
  let revInt = int.toString().split('').reverse().join('')

  return parseInt(revInt) * Math.sign(int)
}
