/**
 * @ Author: Mars Santoso (marssantoso@hotmail.com)
 * @ Create Time: 2019-10-13 01:11:49
 * @ Modified by: Mars Santoso
 * @ Modified time: 2019-10-13 03:53:53
 * @ Description: lib/initials.js
 */

function getInitials(word, length = 1) {
  return word.substring(0, length)
}

module.exports = function initials(words = '', length) {
  var wordsArray, initials

  wordsArray = words.split(' ')

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
