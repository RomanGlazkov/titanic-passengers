import React from 'react';
import styles from './search.module.scss';

function Search() {
    return (
        <div className={styles.search}>
            <input
                type="text"
                placeholder="Start typing to search"
                className={`${styles.input} ${styles.elem}`}
            />
            <select
                size={1}
                className={`${styles.select} ${styles.elem}`}
                aria-label="Search type selection"
            />
        </div>
    );
}

export default Search;
