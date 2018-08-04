'use strict'

const solution = module.exports = {}

solution.chunk = (arr, size) => {
  let chunked = []

    for (let ele of arr) {
      if (chunked.length === 0 || chunked[chunked.length] - 1 === size) {
        console.log('size', size)
        console.log('1', ele)
        chunked.push([ele])
      } else {
        console.log('2', ele)
        chunked[chunked.length - 1].push(ele)
      }
    }
    return chunked
}
