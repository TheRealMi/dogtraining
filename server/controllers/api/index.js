// Establish api routes here
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const behaviorRoutes = require('./behaviorRoutes');
const trainingRoutes = require('./trainingRoutes');
const petRoutes = require('./petRoutes');

router.use('/users', userRoutes);
router.use('/behaviors', behaviorRoutes);
router.use('/training', trainingRoutes);
router.use('/pets', petRoutes);

module.exports = router;