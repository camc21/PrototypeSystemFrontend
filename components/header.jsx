//react
import {React, useState, useEffect } from 'react';

//styles
import styles from '../styles/header.module.css';

import Navbar from '../components/navbar';

export default function Header(props) {

    return(
        <>
        <header className={styles.header}>
            <Navbar />
        </header>
        </>
    )
}