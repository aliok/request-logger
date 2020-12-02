const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.raw({ inflate: true, limit: '1000kb', type: '*/*' }));

app.all('*', function(req, res) {
    console.log("=======================");
    console.log("Request headers:");
    console.log(req.headers)
    console.log("\nRequest body - raw:");
    console.log(req.body)
    console.log("\nRequest body - to string:");
    console.log(String(req.body))
    console.log("=======================\n");
    // res.status(200).send('');  --> used in image tag send200
    // res.status(201).send('');  --> used in image tag send201
    res.status(202).send('');   // --> used in image tag send202 and latest

});


app.listen(8080, () => {
    console.log('https://github.com/aliok/request-logger');
    console.log('App listening on :8080');
});

