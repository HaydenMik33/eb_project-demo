const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const users = require('./routes/users');
const items = require('./routes/items')
const orders = require('./routes/orders')
mongoose.connect(config.database).then(()=>{
    
}).catch(console.error)

mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});
mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err);
});
const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport)
// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/items',items)
app.use('/users', users);
app.use('/orders',orders)
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

// app.get('*',(req,res)=>{
// res.sendfile(path.join(__dirname,'public/index.html'))
// })

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server started on port '+port);
});
