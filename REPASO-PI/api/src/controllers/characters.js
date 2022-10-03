const axios = require('axios');
const { Character, Episode } = require('../db');

const allCharacters = async () => {
  try {
    //*consulta a la api
    const getDataAPI = await axios.get(`https://rickandmortyapi.com/api/character`)

    let infoAPI = getDataAPI.data.results.map((e) => {
      return {
        name: e.name,
        species: e.species,
        origin: e.origin.name,
        imagen: e.image,
        created: false
      };
    });

    //*consulta a la DB
    const infoDB = await Character.findAll({
      include: [Episode]
    })

    return infoAPI.concat(infoDB);

  } catch (e) {
    console.log(e)
  }
};

const createCharacter = async (name) => {
  try {
    if (!name) new Error({ msg: 'Necesitas un name' })

    await Character.create({ name: name })
    return ('Creado exitosamente')

  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  allCharacters,
  createCharacter
};