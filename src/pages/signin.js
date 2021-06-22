import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { NavContainer, HeaderContainer } from '../containers'
import { Header, Nav, Form } from '../components'
import { FirebaseContext } from '../context/firebase';
import * as  ROUTES from '../constant/routes';

export default function SignIn() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';

    const handleSignIn = (e) => {
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            })
    }
    return (
        <Header>
            <Header.Frame>
                <NavContainer />
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} metho="POST">
                        <Form.Input
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}

                        />
                        <Form.Input
                            placeholder="Password"
                            autoComplete="off"
                            type="password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}

                        />
                        <Form.Submit disable={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>

                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </Header.Frame>
        </Header>
    )
}

