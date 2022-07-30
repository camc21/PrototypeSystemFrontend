import axios from "axios";

const baseUrl = 'http://localhost:8080/api/anime';

export const AnimeDataService = {
  _list,
  _findById,
  _post,
  _put,
  _delete,
  _page
};

function _list() {
  return axios.get(baseUrl, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  });
}

function _page(pageNo, pageSize, sortBy) {
  return axios.get(`${baseUrl}/page`, {
    headers: { "Authorization": localStorage.getItem('accessToken') },
    params: { "pageNo": pageNo, "pageSize": pageSize, "sortBy": sortBy}
  });
}

function _findById(id) {
  return axios.get(`${baseUrl}/${id}`, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  });
}

function _post(anime) {
  return axios.post(`${baseUrl}`, anime, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  })
}

function _put(anime) {
  return axios.put(`${baseUrl}`, anime, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  })
}

function _delete(id) {
  return axios.delete(`${baseUrl}/${id}`, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  })
}



