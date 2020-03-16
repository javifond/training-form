import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './questionTwo.module.scss';

class QuestionTwo extends Component {
    state = {
        isValid: false,
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.history.push('/');
    };

    render() {
        return (
            <section className={styles.root}>
                <form onSubmit={this.handleSubmit} className={styles.container}>
                    <p className={styles.title}>
                        Are you experiencing runny nose, sore throat or/and
                        cough?
                    </p>
                    <div className={styles.radioContainer}>
                        <input hidden type="radio" id="yep" name="yes" />
                        <label htmlFor="yep">Yes</label>

                        <input hidden type="radio" id="nope" name="no" />
                        <label htmlFor="nope">No</label>
                    </div>
                    {this.state.isValid && (
                        <button className={styles.button} type="submit">
                            Continue
                        </button>
                    )}
                </form>
            </section>
        );
    }
}

export default withRouter(QuestionTwo);
