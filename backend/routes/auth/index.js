const router = require('express').Router();
// const passport = require('../../passport');
const usersController = require('../../controllers/usersController');
const withAuth = require('../../middleware.js');

// Match with /auth/ endpoint
router.post('/authenticate', usersController.authenticate);
router.get('/checkToken', withAuth, usersController.checkToken);
router.get('/logout', usersController.logout);
router.get('/users', usersController.getUsers);

// CRUD
router.post('/user', usersController.register);
router.delete('/user/:id', usersController.delete);
router.get('/user/:id', usersController.getUser);
router.put('/user/:id', usersController.update);
router.post('/user/:id', withAuth, usersController.update);

module.exports = router;
