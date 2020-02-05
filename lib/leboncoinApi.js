const leboncoin = require('leboncoin-api');
const departments = require('leboncoin-api/const/departments.json')

class Leboncoin {
    constructor(options) {
        this.query = options.query;

        if (!this.query)
            throw new Error('no query in parameters');

        if (options) {
            this.options = {
                page: options.page || '',
                category: options.category || null,
                region: options.region || null,
                department: options.department || null,
                location: options.location || []
            }
        }

        this.search = new leboncoin.Search(this.options);

        this.search.setQuery(options.query);
    }

    run() {
        let s = this.search;

        return new Promise((resolve, reject) => {
            s.run().then((data) => {
                resolve(data);
            }, function (err) {
                console.error(err);
                reject(err);
            });
        });
    }
}

module.exports = Leboncoin;
