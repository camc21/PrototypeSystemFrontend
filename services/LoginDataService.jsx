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

  function logOut(){
    const router = useRouter();
    localStorage.removeItem('token');
    router.push('/')
  }

  function isLogged(){
    const user = localStorage.getItem('token');
    if(user){
      return true;
    }
    return false;
  }