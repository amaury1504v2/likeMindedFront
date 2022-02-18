import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import './Test.css'
import { socket } from '../socket'
import axios from 'axios'

export default function Messages() {
    useEffect(()=>{
        socket.on('returnMessage', data => {
            let li = document.createElement('li')
            let br = document.createElement('br')
            li.style.backgroundColor = 'blue'
            li.style.borderRadius = '5px'
            li.style.color = 'white'
            let texte = document.createTextNode(data)
            li.appendChild(texte)
            let liste = document.getElementById('liste')
            liste.appendChild(br)
            liste.appendChild(li)
        })
        axios.get('http://localhost:3001/user/all')
            .then(function (response) {
                // handle success
                for(let i = 0; i < response.data.data.length; i++) {
                    console.log(response.data.data[i].email);
                    const para = document.createElement("p");
                    var element = document.getElementById('liste-email');
                    para.innerText = response.data.data[i].email;
                    para.to = "/pif"
                    console.log(element);
                    element.appendChild(para);
                    
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    const [names, setNames] = useState([])
    const [msg, setMsg] = useState('')

    function submitMessage(e) {
        e.preventDefault()
        // console.log(msg);
        socket.emit('sendMessage', msg)
        
    }

    function seDeconnecter(e) {
        window.location.href = '/login'
    }

    console.log(names);

  return <div className='container'>
      <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/groupes" className="nav-link" href="#"><img src="https://img.icons8.com/ios-glyphs/38/000000/people-skin-type-7.png"/></Link>
                </li>
                <li className="nav-item">
                    <Link to="/messages" className="nav-link" href="#"><img src="https://img.icons8.com/ios/30/000000/facebook-messenger--v1.png"/></Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link" href="#"><img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/36/000000/external-user-back-to-school-kmg-design-glyph-kmg-design.png"/></Link>
                </li>
                <li>
                    <button type="button" onClick={(e)=>seDeconnecter(e)} className="btn btn-danger">Se Déconnecter</button>
                </li>
            </ul>
            <div class="formulaire">
                <input type="text" id="msg" name="message" onChange={ (e)=>setMsg(e.target.value) } style={{ width: '1350px' }}></input>
                <button type="button" onClick={(e)=>submitMessage(e)} className="btn btn-primary">Envoyer</button>
            </div>
            <br/>
            <br/>
            <div id='liste-email'></div>
            
      </div>;
}
