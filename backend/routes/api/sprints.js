const router = require('express').Router();
const sprintsController = require('../../controllers/sprintsController');
const withAuth = require('../../middleware.js');

// Match with /api/sprints endpoint

// CRUD
router.post('/sprint', sprintsController.create);
router.get('/sprint/:id', sprintsController.getById);
router.put('/sprint/:id', sprintsController.updateById);
router.delete('/sprint/:id', sprintsController.deleteById);

module.exports = router;
