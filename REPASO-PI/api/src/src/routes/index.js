const { Router } = require("express");
const character = require('./characters')
const episode = require('./episodes');

const router = Router();

// Configurar los routers

router.use('/character', character);
router.use('/episode', episode);


module.exports = router;
