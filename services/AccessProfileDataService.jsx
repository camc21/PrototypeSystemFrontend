import axios from "axios";

const baseUrl = 'http://localhost:8081/api/accessProfile';

export const AccessProfileDataService = {
  _list,
  _findById,
  _post,
  _put,
  _delete,
  _page,
  _comboBoxAccessProfiles
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

function _post(accessProfile) {
  return axios.post(`${baseUrl}`, accessProfile, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  })
}

function _put(accessProfile) {
  return axios.put(`${baseUrl}`, accessProfile, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  })
}

function _delete(id) {
  return axios.delete(`${baseUrl}/${id}`, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  })
}

async function _comboBoxAccessProfiles(){
  return axios.get(`${baseUrl}/comboboxAccessProfile`, {
    headers: { "Authorization": localStorage.getItem('accessToken') },
  });
}



