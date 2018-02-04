const passport=require('passport');
const keys=require('../config/keys.js');
const mongoose=require('mongoose');
const GoogleStrategy=require('passport-google-oauth20').Strategy;

const User = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},(accessToken,refreshToken,profile,done)=>{

    User.findOne({googleId:profile.id})
        .then((existingUSer)=>{
            if(existingUSer){
            //User already existed
            }
            else{

                new User({googleId:profile.id, name: profile.name.givenName}).save();
            }
        })

   
    
} 
));