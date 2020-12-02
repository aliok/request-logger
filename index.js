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
    res.send("ok\n");
});


app.listen(3000, () => {
    console.debug('App listening on :3000');
});

