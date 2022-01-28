import React, { useEffect, useState } from 'react'
import './Test.css'
import { socket } from '../socket'

export default function Test() {
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
    }, [])


    const [msg, setMsg] = useState('')

    function submitMessage(e) {
        e.preventDefault()
        // console.log(msg);
        socket.emit('sendMessage', msg)
        
    }

    function seDeconnecter(e) {
        window.location.href = '/login'
    }

    return (
        <div class='messagerie'>
            <ul id="liste"></ul>
            <div class="formulaire">
                <input type="text" id="msg" name="message" onChange={ (e)=>setMsg(e.target.value) } style={{ width: '1350px' }}></input>
                <button type="button" onClick={(e)=>submitMessage(e)} className="btn">Envoyer</button>
                <button type="button" onClick={(e)=>seDeconnecter(e)} className="btn">Se Déconnecter</button>
            </div>
        </div>
    )
}
