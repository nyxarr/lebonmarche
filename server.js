const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const LeboncoinAPI = require('./lib/leboncoinApi');
const { NominatimSearch } = require('./lib/nominatim');

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(bodyParser.json());

app.post('/search', async (req, res) => {
    let json = req.body;

    try {
        if (json.departement) {
            
        }

        var lbApi = new LeboncoinAPI(json);
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }

    lbApi.run().then((results) => {
        console.log(results.results[0])
        res.json(results);
    }).catch((err) => {
        console.error(err);
        res.status(400).send(err);
    });
});

app.post('/departements')