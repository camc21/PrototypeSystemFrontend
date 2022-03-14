import axios from "axios";

const baseUrl = 'http://localhost:8081/api/userEntity';

export const UserEntityDataService = {
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

function _post(usuario) {
  return axios.post(`${baseUrl}`, usuario, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  })
}

function _put(usuario) {
  return axios.put(`${baseUrl}`, usuario, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  })
}

function _delete(id) {
  return axios.delete(`${baseUrl}/${id}`, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  })
}



