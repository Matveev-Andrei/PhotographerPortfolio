const userController = require('../controllers/user.controller');

const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
    app.get('/profile', authenticate, userController.getLoggedInUser)
    app.post("/api/user/register", userController.register);
    app.post("/api/user/login", userController.login);
    app.post("/api/user/logout", userController.logout);
    app.post("/api/user/upload/image", authenticate, userController.uploadingImage);
    app.put("/api/user/:id/update", authenticate, userController.updateUser);
    app.get("/api/user/loggedin", authenticate, userController.getLoggedInUser);
};