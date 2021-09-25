import {React, useState, useEffect } from 'react';

//styles
// import '../styles/navbar.css';

import Icon from '@mdi/react'
import { mdiAccountCircle } from '@mdi/js';
import { mdiMenu } from '@mdi/js';

import {Checkbox} from 'primereact/checkbox';

export default function Navbar(props) {

  const [checkBoxMenuEsquerda, setCheckBoxMenuEsquerda] = useState(false);
  const [checkBoxMenuDireita, setCheckBoxMenuDireita] = useState(false);

  return (
    <>
      <nav>
        <div>
          <input type="checkbox" id="menu-left" />
          <label for="menu-left"  class="menu-bt left"></label>
          <div class="nav-menu left">
            <div class="menu-scroll">
              <h5>início</h5>
              <a href="">
              <Icon path={mdiAccountCircle}
                title="User Profile"
                size={1}
                color="#4682B4"
              />
                Recibos/Acordos em Aberto<span>3</span>
              </a>
              <a href="" class="active">
                <Icon path={mdiAccountCircle}
                  title="User Profile"
                  size={1}
                  color="#4682B4"
                />
                Diário da Portaria
              </a>

              <h5>Portaria</h5>
              <a href="">
                <Icon path={mdiAccountCircle}
                  title="User Profile"
                  size={1}
                  color="#4682B4"
                />
                Consulta de Ocorrências
              </a>
            </div>
          </div>
        </div>

        <h1>Pure CSS - Navbar left and right</h1>

        <div>
          <input type="checkbox" id="menu-right" />
          <label for="menu-right" class="menu-bt right" /> 
          <div class="nav-menu right">
            <div class="menu-scroll">
              <h5>usuários e perfis</h5>
              <a href="">
                <Icon path={mdiAccountCircle}
                  title="User Profile"
                  size={1}
                  color="#4682B4"
                />
                Perfis
              </a>
              <a href="" class="active">
                <Icon path={mdiAccountCircle}
                  title="User Profile"
                  size={1}
                  color="#4682B4"
                />
                Usuários
              </a>

              <h5>sistema</h5>
              <a href="">
                <Icon path={mdiAccountCircle}
                  title="User Profile"
                  size={1}
                  color="#4682B4"
                />
                Novo Aviso
              </a>
            </div>
          </div>
        </div>
  
      </nav>
    </>
  )
}