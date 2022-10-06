const { Router } = require('express');
const { allEpisodes, getEpisode } = require('../controllers/episodes.js');

const router = Router();

router.get('/', async (req, res) => {
  res.json(await allEpisodes())
})

module.exports = router; 