import React from 'react'
import styles from '../styles/menu.module.scss';
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <div className={styles.container}>
            <Link to="/notes">
                Notes
            </Link>
            <Link to="/design">
                Design
            </Link>
            <Link to="/space">
                My NFTs
            </Link>
        </div>
    )
}

export default Menu