import React from 'react';
import styles from './header.module.scss';

type HeaderProps = {
    header: string
};

function Header(props: HeaderProps) {
    const { header } = props;

    return (
        <h1 className={styles.header}>
            {header}
        </h1>
    );
}

export default Header;
