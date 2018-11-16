'use strict'

const solution = module.exports = {}

solution.anagram = (str1, str2) => {

  console.log(solution)
  console.log(module.exports)

  const str1CharMap = buildCharMap(str1)
  const str2CharMap = buildCharMap(str2)

  if (Object.keys(str1CharMap).length !== Object.keys(str2CharMap).length) {
    return false
  }

  for (let char in str1CharMap) {
    if (str1CharMap[char] !== str2CharMap[char])  {
      return false
    }
  }
  return true
}

function buildCharMap(str) {
  const charMap = {}

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}


solution.anagram2 = (str1, str2) => {
  return cleanString(str1) === cleanString(str2)
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}
