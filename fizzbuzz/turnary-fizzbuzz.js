'use strict'

const fizz = n => {
  let result = ''
  
  for (let i = 1; i <= n; i++) {
    return result += i % 3 === 0 && i % 5 === 0 ? 'fizzbuzz '
    : i % 3 === 0 ? 'fizz '
    : i % 5 === 0 ? 'buzz ' : i + ' ' 
  }
}
fizz(15)
