const router = require('express').Router();
const todosController = require('../../controllers/todosController');
const withAuth = require('../../middleware.js');

// Match with /api/todo endpoint

// CRUD
router.post('/todo', withAuth, todosController.create);
router.get('/todo/:id', withAuth, todosController.getById);
router.put('/todo/:id', withAuth, todosController.updateById);
router.delete('/todo/:id', withAuth, todosController.deleteById);

module.exports = router;
