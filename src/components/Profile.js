import React from 'react';
import { Link } from "react-router-dom";

export default function Profile() {
    function seDeconnecter(e) {
        window.location.href = '/login'
    }
  return <div className='container-fluid' align="center" style={{ diplay: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
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
            <div className="blue" 
                style={{
                    backgroundColor: 'blue',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '300px',
                    flexDirection: 'column'
                }}>
                <div className="circle" 
                    style={{
                        height: '150px',
                        width: '150px',
                        borderRadius: '75px',
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                }}>
                    <h2 style={{ fontSize: '70px', color: 'blue' }}>AG</h2>
                </div>
                <h2 style={{ margin: '20px', color: 'white', textAlign: 'center'}}>Bienvenue<br/>Amaury</h2>
            </div>
            <div className="gray"
                style={{ backgroundColor: '#d9d9d9', 
                width: '600px', height: '150px', 
                borderRadius: '0 0 50px 50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center' }}
            >
                <h2>Centres d'intérêt</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                <div
                style={{ backgroundColor: 'green', 
                width: '150px', height: '100px', 
                borderRadius: '50px'}}></div>
                <div
                style={{ backgroundColor: 'red', 
                width: '150px', height: '100px', 
                borderRadius: '50px'}}></div>
            </div>
        </div>;
}
