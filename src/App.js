import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Home from './components/home/home';
import QuestionOne from './components/questionOne/questionOne';
import QuestionTwo from './components/questionTwo/questionTwo';
import Results from './components/results/results';

function App() {
    return (
        <Router>
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
            >
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/question-one">
                    <QuestionOne />
                </Route>
                <Route path="/question-two">
                    <QuestionTwo />
                </Route>
                <Route path="/results">
                    <Results />
                </Route>
            </AnimatedSwitch>
        </Router>
    );
}

export default App;
