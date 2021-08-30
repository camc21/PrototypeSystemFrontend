import axios from "axios";

const baseUrl = 'http://localhost:8081/api/anime';

export const AnimeDataService = {
  listarAnimes,
  listarAnimesPorId,
};

function listarAnimes() {
  console.log('listar anime service')
  return axios.get('http://localhost:8081/api/anime', {
    headers: { "Authorization": localStorage.getItem("token") }
    })
}

function listarAnimesPorId(id) {
  return axios.get(`http://localhost:8081/api/anime/${id}`, {
    headers: { "Authorization": localStorage.getItem("token") }
  })
}
 


