/**
 * Permet de mettre la prémière lettre d'un texte en majuscule
 * @param {String} text Le text à traiter
 */
exports.ucFirst = (text) => {
    return text[0].toUpperCase() + text.substring(1)
}