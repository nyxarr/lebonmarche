const Nominatim = require('nominatim-geocoder')
const geocoder = new Nominatim()


module.exports.search = (query) => {
    return new Promise((resolve, reject) => {
        geocoder.search({ q: query })
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
    });
}