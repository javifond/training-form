import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/simpleAction';

import styles from './questionOne.module.scss';

const mapDispatchToProps = {
    simpleAction,
}

const mapStateToProps = state => ({
    ...state
   })

class QuestionOne extends Component {
    simpleAction = (e) => {
        this.props.simpleAction(e.target);
    }

    render() {
        return (
            <section className={styles.root}>
                <h2>Question One</h2>
                <button onClick={(e) => this.simpleAction(e)}>Click me!</button>
                { console.log(this.props) }
            </section> 
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionOne);
