import React from "react";
import {Link} from "react-router-dom"
import '../App.css';
import '../images/bodega-logo.png';
import logo from '../images/bodega-logo.png';
import carrito from '../images/shopping-cart_1.png';

function BootstrapNavbar() {
    return (
       
        
  <div>
    <nav className="navbar fixed-top navbar-expand-lg bg-light "> 
      <div className='container-fluid' >
      
        <Link className="navbar-brand" to="/">
        <img src ={logo} alt ='Bodega de Campo' width={70}/>
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <Link className="nav-link" aria-current="#" to="/">Acerca_de</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" aria-current="/categorys/Malbec" to="/categorys/Malbec">Malbec</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" aria-current="/categorys/Cabernet" to="/categorys/Cabernet">Cabernet</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" aria-current="/categorys/Syrah" to="/categorys/Syrah">Syrah</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" aria-current="/categorys/Merlot" to="/categorys/Merlot">Merlot</Link>
            </li>
            
            {/* Formulario */}  
            <li className="nav-item">
              <Link className="nav-link" to="#">Contacto</Link>
            </li>
            
          </ul>
          
          {/* Carrito */}
          <div className="cart-menu align-items-center d-flex">
            <div className="sidebar-social">
              <ul>
                <li>
                  <div className="cart-icono">
                    <img src ={carrito} alt ='icono carrito' width={30}/>
                    <span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle">0</span>
                  </div> 
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  </div>
  )
}
export default BootstrapNavbar;
