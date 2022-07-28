import axios from "axios";
import { useRouter } from 'next/router'

const baseUrl = `http://localhost:8081`;

  export const LoginDataService = {
    logIn,
    logOut,
    isLogged,
    validateToken,
  };

  function logIn(email, password) {
    let data = {email, password}
    return axios.post(baseUrl+'/oauth-service/signin', data, {})
  }

  function logOut() {
    const router = useRouter();
    localStorage.removeItem('accessToken');
    router.push('/')
  }

  function isLogged() {
    const token = localStorage.getItem('accessToken');
    return token;
  }

  function validateToken() {
    const token = localStorage.getItem('accessToken');
    return axios.get(baseUrl+'/oauth-service/validateToken', {
      params: {
        token: token
      }
    });
  }