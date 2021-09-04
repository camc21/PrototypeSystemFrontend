import axios from "axios";
import { useRouter } from 'next/router'

const baseUrl = `http://localhost:8081`;

export const LoginDataService = {
    logIn,
    logOut,
    isLogged,
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
    if(localStorage.getItem('accessToken') !== null && localStorage.getItem('accessToken') !== undefined){
      return true;
    }
    return false;
  }