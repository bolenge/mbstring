/**
 * Permet de mettre la prémière lettre d'un texte en majuscule
 * @param {String} text Le text à traiter
 */
exports.ucFirst = (text) => {
    return text[0].toUpperCase() + text.substring(1)
}

/**
 * Vérifie si l'url passé en paramètre est valide
 * @param {String} url
 * @return {Boolean}
 */
exports.isUrlValid = (url) =>  {
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regex = new RegExp(expression);

    if (regex.test(url)) {
        return true
    }else {
        return false
    }
}