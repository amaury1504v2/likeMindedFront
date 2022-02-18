import React from 'react'
import axios from 'axios'
import Background from '../assets/signup.jpg'
import { Link } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

export default function Login_fct() {
    let email = null
    let password = null
    function onPost(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/user/login', { email, password })
          .then((result) => {
            //access the results here.... 
            console.log(result.data);
            localStorage.setItem('token', result.data.token)
            localStorage.setItem('userId', result.data.userId)
            window.location.href = '/test'
          });
        localStorage.setItem('email', email)
        console.log(localStorage.getItem('email'));
    }

    function onChangeEmail(e) {
        e.preventDefault()
        email = e.target.value
        console.log('onChangeEmail');
    }
    function onChangePassword(e) {
        e.preventDefault()
        password = e.target.value
        console.log('onChangePassword');
    }

    const responseFacebook = (response) => {
        console.log(response);
      }
  
      const responseGoogle = (response) => {
        console.log(response);
      }

    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', maxHeight: '800px', minHeight: '750px', width:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                <h2 style={{textAlign: 'center', marginBottom: '60%'}}>Like minded</h2>
                <h3 style={{textAlign: 'center'}}>Connectez-vous</h3>
                <br/>
                <form onSubmit={onPost}>
                    <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={onChangeEmail}
                    style={{border: 'none', borderRadius: '5px', width: '300px', height: '30px'}}
                    />

                    <br/>
                    <br/>

                    <input
                    type="text"
                    name="password"
                    placeholder="mot de passe"
                    value={password}
                    onChange={onChangePassword}
                    style={{border: 'none', borderRadius: '5px', width: '300px', height: '30px'}}
                    />

                    <br/>
                    <br/>

                    <div style={{display: 'flex'}}>
                        <button type="sumbit" style={{ border: 'none', background: '#f5cda2', borderRadius: '5px', margin: 'auto'}} >Se connecter</button>
                    </div>

                    <br />
                    <br />

                    <FacebookLogin
                        appId="" //APP ID NOT CREATED YET
                        fields="name,email,picture"
                        callback={responseFacebook}
                    />
                    <br />
                    <br />


                    <GoogleLogin
                        clientId="465172562750-e2e8u5vkfnirdh56bn144l0su7ng55a6.apps.googleusercontent.com" 
                        buttonText="LOGIN WITH GOOGLE"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />
                </form>
                <br/>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Link to="/signup">Je n'ai pas de compte</Link>
                </div>
            </div>
        </div>
    )
}
