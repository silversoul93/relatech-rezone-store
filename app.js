var express = require('express');

var app = express();

app.use(express.static('restore'));

app.listen(8080, () => {
    console.log("Listening");
});