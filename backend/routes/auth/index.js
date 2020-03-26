const router = require('express').Router();
// const passport = require('../../passport');
const usersController = require('../../controllers/usersController');
const withAuth = require('../../middleware.js');

// router.post('/login', usersController.auth, passport.authenticate('local'), userController.authenticate);
router.post('/authenticate', usersController.authenticate);
router.post('/user', usersController.register);
router.post('/user/:id', withAuth, usersController.update);
router.get('/checkToken', withAuth, usersController.checkToken);
router.get('/logout', usersController.logout);
router.get('/user/:id', usersController.getUser);
router.get('/users', usersController.getUsers);
router.delete('/user/:id', usersController.delete);

module.exports = router;
