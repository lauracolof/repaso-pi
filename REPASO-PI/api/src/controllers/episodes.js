const axios = require('axios');
// const e = require('express');
const { Character, Episode } = require('../db');

const allEpisodes = async () => {
  try {
    //*consulta a la api
    let episodeApi = await axios.get(`https://rickandmortyapi.com/api/episode`);
    let infoApi = episodeApi.data.results.map((e) => { //info api retorna array con objs
      return { name: e.name }
    });

    if (!infoApi) new Error({ msg: 'No se pudo crear' })
    infoApi.map((x) => {
      return Episode.create({ name: x.name })
    });
    console.log('Creado existosamente');

  } catch (e) {
    console.log(e)
  }
};

//consulta a la DB
const getEpisode = async () => {
  try {
    const episodeDB = await Episode.findAll({
      include: [Character]
    })
    return episodeDB;

  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  allEpisodes,
  getEpisode
};

