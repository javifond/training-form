import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './results.module.scss';

const mapStateToProps = (state) => ({
    ...state,
});

class Results extends Component {
    state = {
        mightHaveTheVirus: false,
    };

    componentDidMount() {
        const { hasFever, hasWheeze } = this.props;

        this.setState({
            mightHaveTheVirus: hasFever && hasWheeze,
        });
    }

    handleClick = (e) => {
        e.preventDefault();

        this.props.history.push('/');
    };

    render() {
        return (
            <section className={styles.root}>
                {this.state.mightHaveTheVirus && (
                    <article className={styles.container}>
                        <p>
                            Ouh! Your symptoms indecate that you{' '}
                            <strong>might have </strong>Corona Virus.
                        </p>
                        <p>Please stay at home.</p>
                        <p>And call the authorities.</p>
                        <p>Do it for your safety and for those around you.</p>
                    </article>
                )}

                {!this.state.mightHaveTheVirus && (
                    <article className={styles.container}>
                        <p>
                            Uff! You <strong>might not have</strong> Corona
                            Virus.
                        </p>
                        <p>
                            But as a general recommendation, please stay at
                            home.
                        </p>
                        <p>
                            Let's be resposible and show solidarity to our
                            comunity.
                        </p>
                        <p>Thanks a lot.</p>
                    </article>
                )}

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

export default connect(mapStateToProps, null)(withRouter(Results));
