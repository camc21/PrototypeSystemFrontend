import axios from "axios";

const baseUrl = 'http://localhost:8081/api/functionality';

export const FunctionalityDataService = {
  _comboBox
};

function _comboBox() {
  return axios.get(`${baseUrl}/comboBox`, {
    headers: { "Authorization": localStorage.getItem('accessToken') }
  });
}



