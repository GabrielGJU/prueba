const express = require('express');
const app = express();
const path = require('path');

//Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

//middlewares


//routes

app.use(require('./views/routes'))

//static files

app.use(express.static(path.join(__dirname, 'public')))


//listenig the server
app.listen(app.get('port'), () => {
    console.log('Servidor on port',app.get('port'));
})