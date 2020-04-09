let express = require('express');
let app = express();
let expressHandlebars = require('express-handlebars');

app.use(express.static('public'));

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}));

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

  res.render('index', {title: 'Menu'});
})

app.get('/hours', (req, res) => {

  res.render('hours', {title: 'Hours'});
})

app.get('/checkout', (req, res) => {

  res.render('checkout', {title: 'Checkout'})
})

app.listen('3000', () => {
  console.log('server is running on port 3000');
})
