const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

//Define path for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partPath = path.join(__dirname, '../templates/parts');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Krisna Adi',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Krisna Adi',
    });
});

app.get('/weather', (req, res) => {
    res.send('WEATHER');
});

app.get('*', (req, res) => {
    res.send('404')
})

app.listen(3000, () => {
    console.log('Server is up oon posrt 3000');
});
