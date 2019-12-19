# mbstring

Librairie javascript offrant des méthodes permettant de gérer des chaines e caractères (string)

## Installation

```sh
$ npm install mbstring
```

## API

```js
var mbstring = require("mbstring");

```

### mbstring.isUrlValid(url)

Permet de vérifier si un url est valide partant d'une regex de vérification

**Note** Cette méthode (fonction) a été enlevée dans la version 0.1.0, vu que d'autres personnes l'utilisaient déjà nous l'avons remis dans la version 0.1.1 partant d'une autre dépendance `mbregex`.

```js
var url = "https://www.npm.com"
var url2 = "www n pm.com"

console.log(mbstring.isUrlValid(url)) // True
console.log(mbstring.isUrlValid(url2)) // False

```

### ucFirst
Permet de mettre la première lettre d'un text en majuscule
```js
var text = "bolenge";
var text = mbstring.ucFirst(text);

console.log(text)
```