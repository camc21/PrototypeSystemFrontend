import {React} from 'react';
import { storeWrapper } from "../store";


import Header from '../components/header'
import Content from '../components/content'
import Footer from '../components/footer'

import '../styles/global.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'bootstrap/dist/css/bootstrap.css'


function App({ Component, pageProps }) {

    return (
        <>
            <Header />
            <Content>
                <Component {...pageProps} />
            </Content>
            <Footer />
        </>
    )
  }

  export default storeWrapper.withRedux(App);