import React, { Component } from 'react';
import styles from './Home.scss'

class Home extends Component {
    render() {
        return (
            <div>
                <h2 className={styles['title']}>
                    TEST HMR !
                </h2>
            </div>
        )
    }
}

export default Home