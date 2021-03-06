const express = require('express')
const handlebars = require('express-handlebars');
const app = express()
const port = 5000

app.engine('.hbs', handlebars({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
  res.render('home')
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})