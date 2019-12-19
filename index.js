var mbregex = require('mbregex')

/**
 * Permet de mettre la prémière lettre d'un texte en majuscule
 * @param {String} text Le text à traiter
 */
exports.ucFirst = (text) => {
    return text[0].toUpperCase() + text.substring(1)
}

/**
 * Vérifie si l'url passé en paramètre est valide
 * @param {String} url L'url à vérifier
 * @param {Boolean} acceptProtocol Si on doit obliger la présence du protocol devant l'url ou pas
 * @return {Boolean}
 */
exports.isUrlValid = (url, acceptProtocol = true) =>  {
    return mbregex.isUrlValid(url, acceptProtocol)
}