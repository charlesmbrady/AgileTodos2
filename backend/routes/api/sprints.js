const router = require('express').Router();
const sprintsController = require('../../controllers/sprintsController');
const withAuth = require('../../middleware.js');

// Match with /api/sprint endpoint

// CRUD
router.post('/sprint', withAuth, sprintsController.create);
router.get('/sprint/:id', withAuth, sprintsController.getById);
router.put('/sprint/:id', withAuth, sprintsController.updateById);
router.delete('/sprint/:id', withAuth, sprintsController.deleteById);

router.get('/sprint', withAuth, sprintsController.getAllForUser);

module.exports = router;
