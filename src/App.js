import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home/home';
import QuestionOne from './components/questionOne/questionOne';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/question-one">
            <QuestionOne />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
