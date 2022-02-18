import React from 'react';
import { Link } from "react-router-dom";

export default function Groupes() {
    function seDeconnecter(e) {
        window.location.href = '/login'
    }
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
            </ul>groupes</div>;
}
