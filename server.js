const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }))

const toDontsController = require('./controllers/toDonts_controller')
app.use('/toDonts', toDontsController);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});