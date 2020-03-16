import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './results.module.scss';

class Results extends Component {
    handleClick = (e) => {
        e.preventDefault();

        this.props.history.push('/');
    };

    render() {
        return (
            <section className={styles.root}>
                <article>
                    <p>you have corona virus!!</p>
                </article>
                
                <button
                    onClick={this.handleClick}
                    className={styles.button}
                    type="submit"
                >
                    Check Again
                </button>
            </section>
        );
    }
}

export default withRouter(Results);
