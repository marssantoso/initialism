# initialism

> A simple library to get initials out of words.

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
