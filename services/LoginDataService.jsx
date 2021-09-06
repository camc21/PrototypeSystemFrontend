import axios from "axios";
import { useRouter } from 'next/router'

const baseUrl = `http://localhost:8081`;

  export const LoginDataService = {
    logIn,
    logOut,
    isLogged,
    validateToken,
  };

  function logIn(username, password) {
    let data = {username, password}
    return axios.post(baseUrl+'/auth/signin', data, {})
  }

  function logOut() {
    const router = useRouter();
    localStorage.removeItem('accessToken');
    router.push('/')
  }

  function isLogged() {
    const token = localStorage.getItem('accessToken');
    console.log(token);
    return token;
  }

  function validateToken() {
    const token = localStorage.getItem('accessToken');
    return axios.get(baseUrl+'/auth/validateToken', {
      params: {
        token: token
      }
    });
  }