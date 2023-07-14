const GooglePlusTokenStrategy = require('passport-google-plus-token');
const passport = require('passport');
const User = require('../models/userModel');
const {auth} = require('../config/config');
const cloudinary = require('cloudinary');
//passport Google
passport.use(new GooglePlusTokenStrategy({
    clientID: auth.google.CLIENT_ID,
    clientSecret: auth.google.CLIENT_SECRET,
}, async (accessToken, refreshToken, profile, done) => {
    try { 
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        console.log('profile', profile);

        // Kiểm tra xem người dùng hiện tại có tồn tại trong cơ sở dữ liệu của chúng ta không
        const user = await User.findOne({
            authGoogleID: profile.id,
            authType: 'google',
        });

        if (user) {
            return done(null, user);
        }

        // Nếu là tài khoản mới

        const myCloud = await cloudinary.v2.uploader.upload(profile.photos[0].value, {
            folder: "avatars",
            width: 150,
            crop: "scale",
        });
        const authType = 'google';
        const authGoogleID = profile.id;
        const email = profile.emails[0].value;
        const name = profile.displayName;
        const newUser = await User.create({
            authType,
            authGoogleID,
            name,
            email,
            password: '123123123',
            avatar: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            }
        });
    } catch (err) {
        done(err, false);
    }
}));