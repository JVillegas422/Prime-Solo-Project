require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios=require('axios'); 

router.get('/:name', (req, res) => {
    console.log(req.params.name);
    axios({
        method: 'GET',
        url: 'https://api.fda.gov/drug/drugsfda.json?',
        params: {
            api_key: process.env.FDA_API_KEY,
            search: `products.brand_name ${req.params.name}`,
            limit: 10
        }
    })
      .then((apiRes) => {
        res.send(apiRes.data);
      })
      .catch((err) => {
        console.log('API request failed', err);
    });
});

module.exports = router;