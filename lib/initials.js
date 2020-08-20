/**
 * @ Author: Mars Santoso (marssantoso@hotmail.com)
 * @ Create Time: 2019-10-13 01:11:49
 * @ Modified by: Mars Santoso
 * @ Modified time: 2020-08-20 14:02:02
 * @ Description: lib/initials.js
 */

function getInitials(word, length) {
  return word.substring(0, length === undefined ? 1 : length)
}

module.exports = function initials(words, length) {
  var wordsArray, initials

  wordsArray = words === undefined ? [] : words.split(' ')

  if (length === undefined) {
    initials = wordsArray.map(word => getInitials(word)).join('')
  } else {
    initials =
      wordsArray.length === 1
        ? getInitials(wordsArray[0], length)
        : wordsArray
          .splice(0, length)
          .map(word => getInitials(word))
          .join('')
  }

  return initials.toUpperCase()
}
