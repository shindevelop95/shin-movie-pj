import React from 'react';
import Home from './pages/home'
import SignIn from './pages/signin'
import Signup from './pages/signup'
import Browse from './pages/browse'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import * as ROUTES from './constant/routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuthListener } from './hooks'

function App() {
  const user = useAuthListener();
  console.log("user in app", user);
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          exact
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          exact
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse/>
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
