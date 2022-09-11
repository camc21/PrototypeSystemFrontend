import {React, useState, useEffect } from 'react';
import Link from 'next/link'
import { useSelector, useDispatch } from "react-redux";
import 'primeicons/primeicons.css';

//styles
// import '../styles/navbar.css';

import Icon from '@mdi/react'
import { mdiAccountCircle } from '@mdi/js';
import { mdiLogin } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import { mdiAccountGroup } from '@mdi/js';
import { mdiFolderKey } from '@mdi/js';


//styles
import styles from '../styles/header.module.css';

//services
import { LoginDataService } from '../services/LoginDataService';

//actions
import { showButtonLoginAction } from '../store/actions/login_logout';

import { useRouter } from 'next/router'




export default function Navbar(props) {

  const [checkBoxMenuEsquerda, setCheckBoxMenuEsquerda] = useState(false);
  const [checkBoxMenuDireita, setCheckBoxMenuDireita] = useState(false);

  const router = useRouter()

  const dispatch = useDispatch();

  const showLogin = useSelector((state) => state.showLoginReducer.showLogin);

  useEffect(() => {
      if(localStorage.getItem('accessToken') !== null) {
          dispatch(showButtonLoginAction(false));
      }
  }, [])

  function logIn() {
    router.push('/login')
  }

  function logOut() {
      dispatch(showButtonLoginAction(true));
      localStorage.removeItem('accessToken');
  }

  return (
    <>
      <nav>
        <div>
          <input type="checkbox" id="menu-left" />
          <label htmlFor="menu-left"  className="menu-bt left"><i className="pi pi-bars"></i></label>
          <div className="nav-menu left">
            <div className="menu-scroll">
              <h5>Administrativo</h5>
              {/* <a style={{marginBottom: '5px'}} href="" className="active">
              <Icon path={mdiAccountGroup}
                title="Usuários"
                size={1}
                color="#4682B4"
              />
                Usuários
              </a>
              <a style={{marginBottom: '5px'}} href="" className="active">
                <Icon path={mdiFolderKey}
                  title="Perfis de Acesso"
                  size={1}
                  color="#4682B4"
                />
                Perfis de Acesso
              </a> */}
            </div>
          </div>
        </div>

        <h1>Carlos Augusto Muniz Correa</h1>

        <div>
          <input type="checkbox" id="menu-right" />
          
          <label htmlFor="menu-right" className="menu-bt right"><i className="pi pi-bars"></i></label>
          <div className="nav-menu right">
            <div className="menu-scroll">
              <h5>Meus Dados</h5>
              {/* <a style={{marginBottom: '5px'}} href="" className="active">
                <Icon path={mdiAccountCircle}
                  title="Usuário"
                  size={1}
                  color="#4682B4"
                />
                Usuário
              </a> */}
              {
                showLogin &&
                <Link href="/login">
                  <a onClick={logIn}>Login</a>
                </Link>
              }
            
              {
                !showLogin &&
                <Link href="/">
                  <a onClick={logOut}>Logout</a>
                </Link>
              }
            </div>
          </div>
        </div>

      </nav>
    </>
  )
}