# mbstring

Librairie javascript offrant des méthodes permettant de gérer des chaines e caractères (string)

## Installation

```bash
$ npm install --save mbstring
```

## API

```js
var mbstring = require("mbstring");

```

### mbstring.isUrlValid(url)

Permet de vérifier si un url est valide partant d'une regex de vérification

**Note** Cette méthode (fonction) a été enlevée dans la version 0.1.0, vu que d'autres personnes l'utilisaient déjà nous l'avons remis dans la version 0.1.1 partant d'une autre dépendance `mbregex`.

#### url

L'adresse url à vérifier

```js
var url = "https://www.npm.com"
var url2 = "www n pm.com"

console.log(mbstring.isUrlValid(url)) // True
console.log(mbstring.isUrlValid(url2)) // False

```

### mbstring.ucFirst(text)

Permet de mettre la première lettre d'un texte en majuscule

#### text

Le texte à modifier

```js
var text = "bolenge";
console.log(mbstring.ucFirst(text)); // Bolenge

```