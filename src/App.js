import React from 'react';
import Home from './pages/home'
import SignIn from './pages/signin'
import Signup from './pages/signup'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
    </Router>
  );
}

export default App;
