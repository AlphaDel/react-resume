import React, { Component } from 'react';
import styles from './Home.scss'

class Home extends Component {
    componentDidMount() {
        console.log("Home");
    }
    render() {
        return (
            <div>
                <h2 className={styles['title']}>
                    Welcome to React Utility!
                </h2>
            </div>
        )
    }
}

export default Home