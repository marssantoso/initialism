/**
 * @ Author: Mars Santoso (marssantoso@hotmail.com)
 * @ Create Time: 2019-10-13 01:11:49
 * @ Modified by: Mars Santoso
 * @ Modified time: 2019-10-13 03:54:02
 * @ Description: test/initials.test.js
 */

var initials = require('../lib/initials')

describe('initials', () => {
  it('returns initials from all words by default', () => {
    expect(initials('Acme Incorporation')).toBe('AI')
  })

  it('returns initials from all words', () => {
    expect(initials('Lorem ipsum dolor sit amet')).toBe('LIDSA')
  })

  it('returns a single initial letter if first argument is one word', () => {
    expect(initials('Acme')).toBe('A')
  })

  it('returns an empty string of no word is provided', () => {
    expect(initials()).toBe('')
  })

  it('returns as many letters as the second argument specified', () => {
    expect(initials('John Doe Jr.', 2)).toBe('JD')
  })

  it('returns the initials of each words if second argument is more than the amount of words', () => {
    expect(initials('John Doe Jr.', 5)).toBe('JDJ')
  })

  it('returns first letters if only a single word is provided', () => {
    expect(initials('International', 3)).toBe('INT')
  })
})
