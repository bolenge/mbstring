Librairie javascript offrant des méthodes permettant de gérer des chaines e caractères (string)

## Installation

`npm install --save mbstring`

Example d'utilisation

```js
var mbstring = require("mbstring");

```

### ucFirst
Permet de mettre la première lettre d'un text en majuscule
```js
var text = "bolenge";
var text = mbstring.ucFirst(text);

console.log(text)
```