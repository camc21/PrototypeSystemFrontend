import axios from "axios";

const baseUrl = 'http://localhost:8081/api/anime';

export const AnimeDataService = {
  listarAnimes,
  listarAnimesPorId,
  _post,
  _put,
  _delete
};

function listarAnimes() {
  return axios.get(baseUrl, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
    })
}

function listarAnimesPorId(id) {
  return axios.get(`${baseUrl}/${id}`, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  });
}

function _post(anime){
  return axios.post(`${baseUrl}`, anime, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  })
}

function _put(anime){
  return axios.put(`${baseUrl}`, anime, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  })
}

function _delete(id) {
  return axios.delete(`${baseUrl}/${id}`, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  })
}
 


