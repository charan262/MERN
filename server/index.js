const express=require('express');
const mongoose = require('mongoose');
const cookieSession =require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys=require('./config/keys');


require('./model/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const authRoutes=require('./routes/authRoutes');
const billRoutes=require('./routes/billingRoutes');

const app=express();

app.use(bodyParser.json())
app.use( 
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:[keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billRoutes(app);

const PORT = process.env.PORT || 5000
app.listen(PORT);