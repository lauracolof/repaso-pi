const axios = require('axios');
const { Character, Episode } = require('../db');

// - [ ] GET /characters:
//     - Obtener el listado de personajes
//     - Debe devolver solo los datos necesarios para la ruta principal
const allCharacters = async () => {
  try {
    //*consulta a la api
    const getDataAPI = await axios.get(`https://rickandmortyapi.com/api/character`)

    let infoAPI = getDataAPI.data.results.map((x) => {
      return {
        id: x.id,
        name: x.name,
        species: x.species,
        origin: x.origin.name,
        imagen: x.image,
        created: x.created
      };
    });

    //*consulta a la DB
    const infoDB = await Character.findAll({
      include: [Episode]
    })

    return [...infoAPI, ...infoDB];

  } catch (e) {
    console.log(e)
  }
};

// [ ] POST /character:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de personaje
// Crea un personaje en la BDD
const createCharacter = async (name) => {
  try {
    if (!name) new Error({ msg: 'You need a name' })

    await Character.create({ name: name })
    return ('Created successfully')

  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  allCharacters,
  createCharacter
};