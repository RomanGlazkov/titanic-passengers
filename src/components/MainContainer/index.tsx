import React from 'react';
import styles from './main-container.module.scss';

type MainContainerProps = {
    children: React.ReactNode;
};

function MainContainer(props: MainContainerProps) {
    const { children } = props;

    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default MainContainer;
