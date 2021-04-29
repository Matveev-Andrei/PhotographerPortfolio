const User = require('../models/user.model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const upload = require('../config/multer.config')


module.exports = {

    register: ( req, res) => {
        const user = new User(req.body);
        user
            .save()
            .then(() => {
                res.json({msg: "Success!", user: user});
            })
            .catch(err => res.status(400).json(err));
    },

    login(req, res ) {
        User.findOne({ email : req.body.email})
            .then(user => {
                if (user === null ){
                    res.status(400).json({ msg : "Invalid login attempt inside users THEN" });
                } else {
                    bcrypt
                        .compare(req.body.password, user.password)
                        .then(passwordIsValid  => {
                            if (passwordIsValid) {
                                res
                                    .cookie(
                                        "usertoken",
                                        jwt.sign({ _id: user._id }, process.env.JWT_SECRET),
                                        {
                                            httpOnly: true,
                                            expires: new Date(Date.now() + 9000000),
                                        }
                                    )
                                    .json({
                                        msg : "Success!",
                                        userLogged: {
                                            username : `${user.firstName} ${user.lastName}`
                                        }
                                    });
                                } else {
                                    res.status(400).json({ msg: "Invalid login attempt inside bcrypt THEN"})
                                }
                            })
                            .catch(err =>
                                res.status(400).json({ msg: "Invalid login attempt inside CATCH" })
                                );
                }
            })
            .catch(err => res.json(err));
    },
    logout(req, res) {
        res.clearCookie("usertoken");
        res.json({msg: "usertoken cookie cleared" });
    },
    logout2(req,res) {
        res
        .cookie("usertoke", jwt.sign({ _id: ""}, process.env.JWT_SECRET),{
            httpOnly: true,
            maxAge: 0
        })
        .json({msg: "ok"});
    },

    getLoggedInUser(req,res) {
        const decodedJWT = jwt.decode(req.cookies.usertoken, { complete : true });

        User.findById(decodedJWT.payload._id)
        .then(user => res.json(user))
        .catch(err => res.json(err));
    },

    updateUser(req,res) {
        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                req.body.password = hash;
                const decodedJWT = jwt.decode(req.cookies.usertoken, { complete : true });
                User.findByIdAndUpdate(decodedJWT.payload._id, req.body, { new : true, runValidators : true } )
                .then( updatedUser => res.json(updatedUser))
                .catch(err => res.json(err));
        });
    },

    uploadingImage(req, res) {
        const decodedJWT = jwt.decode(req.cookies.usertoken, { complete : true });
        User.findById(decodedJWT.payload._id)
        .then(user => {
            user.image.name = req.body.name
            user.image.img = req.body.img
            User.findByIdAndUpdate(decodedJWT.payload._id, user , {new : true, runValidators : true} )
                .then( updatedUser => {
                    console.log(updatedUser)
                    res.json(updatedUser)
                })
                .catch(err => {
                    console.log(err)
                    res.json(err)
                })
            res.json(user)
        })
        .catch(err => res.json(err));
    }
};