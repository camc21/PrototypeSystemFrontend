import axios from "axios";

const baseUrl = 'http://localhost:8080/api/userEntity';

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

function _post(userEntityLogin) {
  return axios.post(`${baseUrl}`, userEntityLogin, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  })
}

function _put(userEntityLogin) {
  return axios.put(`${baseUrl}`, userEntityLogin, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  })
}

function _delete(idUserEntity) {
  return axios.delete(`${baseUrl}/${idUserEntity}`, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  })
}



