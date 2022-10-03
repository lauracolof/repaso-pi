const { Router } = require('express');
const axios = require('axios');
const { allCharacters, createCharacter } = require('../controllers/characters');

const router = Router();


router.get('/', async (req, res) => {
  // let result = await allCharacters();
  res.json(await allCharacters());
});

router.post('/', async (req, res) => {
  let { name } = req.body;
  res.json(await createCharacter(name))
});



module.exports = router;