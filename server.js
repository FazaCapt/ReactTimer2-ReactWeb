const express = require('express');

// create our app

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
    if(req.header['x-forwarded-proto'] === 'https'){
        res.redirect('http://' + req.hostname + req.url);
        
    } else {
        next();
    }
})

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Express server is up on port ${PORT}`);
})