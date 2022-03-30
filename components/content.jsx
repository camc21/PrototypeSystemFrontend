import React, { useState, useEffect } from 'react';

import styles from '../styles/content.module.css';


export default function Content({ children }) {
    return(
        <div className={styles.content}>
            {children}
        </div>           
    )
}