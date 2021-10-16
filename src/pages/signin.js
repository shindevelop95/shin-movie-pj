import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { NavContainer} from '../containers'
import { Header, Form } from '../components'
import { FirebaseContext } from '../context/firebase';

export default function SignIn() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
  
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const isInvalid = password === '' || emailAddress === '';
  
    const handleSignin = (event) => {
      event.preventDefault();
      return firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
          history.push('/browse');
        })
        .catch((error) => {
          setEmailAddress('');
          setPassword('');
          setError(error.message);
        });
       
    };
    return (
        <Header>
            <Header.Frame>
                <NavContainer />
                <Form>
                  <Form.Title>Sign In</Form.Title>
                  {error && <Form.Error data-testid="error">{error}</Form.Error>}

                  <Form.Base onSubmit={handleSignin} method="POST">
                    <Form.Input
                      placeholder="Email address"
                      autoComplete="new-password"
                      type="text"
                      value={emailAddress}
                      onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                      type="password"
                      value={password}
                      autoComplete="new-password"
                      placeholder="Password"
                      onChange={({ target }) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
                      Sign In
                    </Form.Submit>
                  </Form.Base>

                  <Form.Text>
                    New to Miryu? <Form.Link to="/signup">Sign up now.</Form.Link>
                  </Form.Text>
                  <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                  </Form.TextSmall>
        </Form>
            </Header.Frame>
        </Header>
    )
}

