import React from 'react';
import Home from './pages/home'
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home/>
      </Route>
    </Router>
  );
}

export default App;
