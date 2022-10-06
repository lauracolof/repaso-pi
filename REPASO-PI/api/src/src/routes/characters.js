const { Router } = require('express');
const { allCharacters, createCharacter } = require('../controllers/characters');

const router = Router();


router.get('/', async (req, res) => {
  // let result = await allCharacters();
  res.json(await allCharacters());
});

router.post('/', async (req, res) => {
  let { name, species, origin, image } = req.body;
  res.json(await createCharacter({ name, species, origin, image }));
  //success handler
  res.status(201).send('Successfully created');
});


module.exports = router;