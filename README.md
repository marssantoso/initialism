# initialism

> A simple library to get initials out of words.

![GitHub](https://img.shields.io/github/license/marssantoso/initialism?style=flat-square&logo=github&logoColor=181717&color=181717&labelColor=666666)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/marssantoso/initialism?sort=semver&style=flat-square&logo=git&color=F05032&labelColor=666666)
![Codecov branch](https://img.shields.io/codecov/c/gh/marssantoso/initialism/master?style=flat-square&logo=codecov&color=F01F7A&labelColor=666666)
![npm](https://img.shields.io/npm/dw/initialism?style=flat-square&logo=npm&color=CB3837&labelColor=666666)

## Installation

Install using [npm](https://npmjs.org/) for node.js:

```sh
npm install --save initialism
```

Or [yarn](https://yarnpkg.com/):

```sh
yarn add initialism
```

## Usage

```js
// Simple usage, returns initials from all words by default
initials('Acme Incorporation')
// 'AI'

// It can be as many words
initials('Lorem ipsum dolor sit amet')
// 'LIDSA'

// Or only a single word
initials('Acme')
// 'A'

// It can take a second argument, to specify the length
initials('John Doe Jr.', 2)
// 'JD'

// It the second argument is more than the amount of words, return the maximum initials
initials('John Doe Jr.', 5)
// 'JDJ'

// If a second argument is provided but the first argument is only a single word, returns from its first letters
initials('International', 3)
// 'INT'
```

## Test

```sh
npm run test
```

Or

```sh
yarn test
```
