var express = require('express');

const PORT = 3000 || process.env.PORT;

var app = express();

app.use(express.static('.'));

app.get('/',(req,res) => {
    res.sendFile('index.html');
})

app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`);
})