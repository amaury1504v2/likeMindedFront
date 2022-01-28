import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import Background from '../assets/signup.jpg'

export default function Signup_fct() {
    let email = null
    let password = null
    function onPost(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/user/signup', { email, password })
          .then((result) => {
            //access the results here.... 
            console.log(result.data);
            window.location.href = '/loginfct'
        });
    }

    function onChangeEmail(e) {
        e.preventDefault()
        email = e.target.value
        console.log('onChange');
    }
    function onChangePassword(e) {
        e.preventDefault()
        password = e.target.value
        console.log('onChange');
    }

    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', height: '1000px', width:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="my-auto">
                <h2 style={{textAlign: 'center', marginBottom: '60%'}}>Like minded</h2>
                <h3 style={{textAlign: 'center'}}>Inscrivez vous</h3>
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
                        <button type="sumbit" style={{ border: 'none', background: '#f5cda2', borderRadius: '5px', margin: 'auto'}} >S'inscrire</button>
                    </div>
                </form>
                <br/>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Link to="/login">Je n'ai pas de compte</Link>
                </div>
            </div>
            
        </div>
    )
}

