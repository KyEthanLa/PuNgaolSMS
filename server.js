const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("index")
})

const indexRouter = require('./routes/index')
const homeRouter = require('./routes/home')

app.use('/', indexRouter)
app.use('/home', homeRouter)

app.listen(3000);