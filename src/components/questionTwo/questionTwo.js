import React, { Component } from 'react';

import styles from './questionTwo.module.scss';

class QuestionTwo extends Component {
    render() {
        return (
            <section className={styles.root}>
                <form  className={styles.content}>
                    <p>
                        Are you experiencing runny nose, sore throat or/and
                        cough?
                    </p>
                    <div>
                        <input
                            type="radio"
                            id="yep"
                            name="yes"
                        />
                        <label htmlFor="yep">Yes</label>

                        <input
                            type="radio"
                            id="nope"
                            name="no"
                        />
                        <label htmlFor="nope">No</label>
                    </div>
                    <button type="submit">Continue</button>
                </form>
            </section>
        );
    }
}

export default QuestionTwo;
