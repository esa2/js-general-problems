'use strict'

const solution = module.exports = {}

solution.chunk = (arr, size) => {
  let save = []

    for (let ele of arr) {
      const last = chunked[chunked.length - 1]
      console.log('last', last)

      if (!last || last.length === size) {
        chunked.push([ele])
      } else {
        last.push(ele)
      }
    }
    return save
}

solution.chunk2 = (arr, size) => {
  let chunked = []
  
}
