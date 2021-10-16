import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { NavContainer, HeaderContainer } from '../containers'
import { Header, Nav, Form } from '../components'
import { FirebaseContext } from '../context/firebase';
import * as  ROUTES from '../constant/routes';

export default function Signup() {

    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignup = (e) => {
        e.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) =>
                result.user.updateProfile({
                    displayName: firstName
                })
                    .then(() => {
                        history.push(ROUTES.BROWSE)
                    })

            )
            .catch((error) => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message)
            })
    }
    return (
        <Header>
            <Header.Frame>
                <NavContainer />
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} metho="POST">
                        <Form.Input
                            placeholder="First Name"
                            value={firstName}
                            autoComplete="new-password"
                            onChange={({ target }) => setFirstName(target.value)}

                        />
                        <Form.Input
                            placeholder="Email Address"
                            value={emailAddress}
                            autoComplete="new-password"
                            onChange={({ target }) => setEmailAddress(target.value)}

                        />
                        <Form.Input
                            placeholder="Password"
                            type="password"
                            autoComplete="new-password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}

                        />
                        <Form.Submit disable={isInvalid} type="submit">
                            Sign Up
                        </Form.Submit>

                    </Form.Base>
                    <Form.Text>
                        Already a user? <Form.Link to="/signin">Sign in now</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </Header.Frame>
        </Header>
    )
}