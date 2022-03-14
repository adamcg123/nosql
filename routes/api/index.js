const router = require('express').Router();

const usersRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

router.use('/users', usersRoutes);
router.use('/thought', thoughtRoutes);

module.exports = router;