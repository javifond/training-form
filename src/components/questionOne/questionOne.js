import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFever } from '../../actions/fever.actions';
import { MIN_TEMPERATURE, MAX_TEMPERATURE } from './questionOne.constants';
import { inRange, hasFever } from './questionOne.utils';

import styles from './questionOne.module.scss';

const mapDispatchToProps = (dispatch) => ({
    setFever: (hasFever) => dispatch(setFever(hasFever)),
});

const mapStateToProps = (state) => ({
    ...state,
});

class QuestionOne extends Component {
    state = {
        isValid: false,
        error: false,
    };

    temperatureInput = React.createRef();

    handleChange = (e) => {
        const temperature = e.target.value;

        this.setState({
            isValid: inRange(temperature),
            error: !inRange(temperature),
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.setFever(hasFever(this.temperatureInput.current.value));
    };

    render() {
        return (
            <section className={styles.root}>
                <form onSubmit={this.handleSubmit} className={styles.container}>
                    <label className={styles.title} htmlFor="fever">
                        Do you have fever?
                        <br />
                        If so, type your temperature. (°C)
                    </label>
                    <input
                        onChange={this.handleChange}
                        className={styles.input}
                        type="number"
                        id="fever"
                        name="temperature"
                        min={MIN_TEMPERATURE}
                        max={MAX_TEMPERATURE}
                        step="0.1"
                        ref={this.temperatureInput}
                    />

                    {this.state.error && (
                        <p className={styles.error}>
                            Cmon, that is not a real temperature!{' '}
                            <span role="img" aria-label="joker">
                                🥵🥶
                            </span>
                        </p>
                    )}

                    {this.state.isValid && (
                        <button type="submit" className={styles.button}>
                            Continue
                        </button>
                    )}
                </form>
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionOne);
