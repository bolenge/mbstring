# mbstring

JavaScript library offering methods for managing character chains (string)

## Installation

```bash
npm install --save mbstring
```

Or

```bash
yarn add mbstring
```

## API

```js
var mbstring = require("mbstring");

```

### mbstring.ucFirst(str: string)

Allow to capitalize the first character of string

```js
var text = "bolenge";
console.log(mbstring.ucFirst(text)); // Bolenge
```