const router = require('express').Router();
const sprintsRoutes = require('./sprints');
const todosRoutes = require('./todos');

router.use(sprintsRoutes);
router.use(todosRoutes);

module.exports = router;
