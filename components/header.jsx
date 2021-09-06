//react
import {React, useState, useEffect } from 'react';
import Link from 'next/link'
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router'

//styles
import styles from '../styles/header.module.css';

//services
import { LoginDataService } from '../services/LoginDataService';

//actions
import { showButtonLoginAction } from '../store/actions/login_logout';


export default function Header(props) {

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

    return(
        <>
            <header className={styles.header}>
                <div className={styles.bar_header}>
                    {
                        showLogin &&
                        <Link href="/login">
                            <a style={{marginRight: '10px', marginBottom: '5px'}} onClick={logIn}>Login</a>
                        </Link>
                    }
                    {
                        !showLogin &&
                        <Link href="/">
                            <a style={{marginRight: '10px', marginBottom: '5px'}} onClick={logOut}>Logout</a>
                        </Link>
                    }
                </div>
            </header>
        </>
    )
}