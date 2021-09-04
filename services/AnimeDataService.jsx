import axios from "axios";

const baseUrl = 'http://localhost:8081/api/anime';

export const AnimeDataService = {
  listarAnimes,
  listarAnimesPorId,
};

function listarAnimes() {
  return axios.get(baseUrl, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
    })
}

function listarAnimesPorId(id) {
  return axios.get(`${baseUrl}/${id}`, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  })
}
 


