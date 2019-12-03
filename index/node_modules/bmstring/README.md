Librairie javascript offrant des méthodes permettant de gérer des chaines e caractères (string)

## Installation

`npm install --save bstring`

Example d'utilisation

```js
var bstring = require("bstring");

```

# ucFirst
Permet de mettre la première lettre d'un text en majuscule
```js
var text = "bolenge";
var text = bstring.ucFirst(text);

console.log(text)
```

# isUrlValid
Permet de vérifier si un url est valide partant d'une regex de vérification
```js
var url = "https://www.bstring.com"
var url2 = "http://www.bstring.com"

if (bstring.isUrlValid(url)) {
    console.log("Adress is valid")
}else {
    console.log("Adress is invalid")
}

```