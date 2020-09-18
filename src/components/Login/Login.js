import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        fname: '',
        lname: '',
        email: '',
        photo: '',
        password: '',
        cpassword: ''

    })
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser)
            history.replace(from)
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
            // ...
        });
    }
    const handleFbLogin = () => {
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider).then(function (result) {
            const { displayName, email } = result.user
            const signedInUser = { name: displayName, email }
            console.log(signedInUser, result)
            setLoggedInUser(signedInUser)
            history.replace(from)

        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    const signedInUser = { name: res.user.displayName, email: user.email }
                    setLoggedInUser(signedInUser)
                    history.replace(from)
                })
                .catch(error => {

                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message
                    newUserInfo.success = false
                    setUser(newUserInfo)
                });

        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {

                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    const signedInUser = { name: res.user.displayName, email: user.email }
                    setLoggedInUser(signedInUser)
                    history.replace(from)


                })
                .catch(function (error) {

                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message
                    newUserInfo.success = false
                    setUser(newUserInfo)
                })
        }
        e.preventDefault();
    }
    const handleBlur = (event) => {
        let isFormValid = true;
        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);

        }

        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passHasNumber = /\d{1}/.test(event.target.value);
            isFormValid = (isPasswordValid && passHasNumber);
        }

        if (event.target.name === 'cpassword') {

            const password = document.getElementById("Password").value;
            isFormValid = event.target.value === password;
            if (!isFormValid) {
                alert("Password does not match!")
            }
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }
    const toggole = () => {
        const newUserInfo = { ...user }
        newUserInfo.error = ''
        newUserInfo.success = true
        setUser(newUserInfo)
        setNewUser(!newUser)
    }
    return (
        <div className='login'>
            <div className='login-border'>
                {newUser ? <h3>Create an Account</h3> : <h3>Login</h3>}
                <form onSubmit={handleSubmit}>
                    {newUser && <input type="text" placeholder='First Name' required />}<br /><br />
                    {newUser && <input type="text" placeholder='Last Name' required />}<br /><br />
                    <input type="text" name="email" onBlur={handleBlur} placeholder='Your Email' required /><br /><br />
                    <input type="password" name="password" id='Password' onBlur={handleBlur} placeholder='Password' required /><br /><br />
                    {newUser && <input type="password" name="cpassword" onBlur={handleBlur} placeholder='Confirm Password' required />}<br /><br />
                    <input className='submit' type="submit" value={newUser ? "Created an Account" : "Login"} />
                </form><br />
                {newUser ? <p>Already have an account? <span style={{ cursor: 'pointer' }} onClick={toggole}><u>Login</u></span></p> : <p>Don't have an account? <span style={{ cursor: 'pointer' }} onClick={toggole}><u>Create an account</u></span></p>}
            </div>
            <div>
                {!user.success ? <p style={{ color: 'red' }}>{user.error}</p> : <p></p>}
                <p style={{ marginLeft: '280px' }}>or</p>

                <button className="btn-login" onClick={handleGoogleSignIn}>Continue with Google</button>
                <br />
                <button className="btn-login" onClick={handleFbLogin}>Continue with Facebook</button>
            </div>
        </div>
    );
};

export default Login;