const express = require('express');
const router = express.Router();

const clientRoutes = require('./api/clientsdb');

router.use('/clients', clientRoutes);

module.exports = router;
