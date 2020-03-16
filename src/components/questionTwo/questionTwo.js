import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setWheeze } from '../../actions/actions';

import styles from './questionTwo.module.scss';

const mapDispatchToProps = {
    setWheeze,
};

class QuestionTwo extends Component {
    state = {
        isValid: false,
        optionSelected: null,
    };

    handleChange = (e) => {
        this.setState({
            isValid: true,
            optionSelected: e.target.id,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.setWheeze(this.state.optionSelected === 'yes');
        this.props.history.push('/results');
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
                        <input
                            onChange={this.handleChange}
                            hidden
                            type="radio"
                            id="yes"
                            name="second-question"
                            className={styles.input}
                        />
                        <label htmlFor="yes" className={styles.label}>
                            Yes
                        </label>

                        <input
                            onChange={this.handleChange}
                            hidden
                            type="radio"
                            id="no"
                            name="second-question"
                            className={styles.input}
                        />
                        <label htmlFor="no" className={styles.label}>
                            No
                        </label>
                    </div>
                    {this.state.isValid && (
                        <button className={styles.button} type="submit">
                            Result
                        </button>
                    )}
                </form>
            </section>
        );
    }
}

export default connect(null, mapDispatchToProps)(withRouter(QuestionTwo));
