import React from "react";
import{ navButtons } from "../../data/productos.js"
//Mayuscula al principio: functional component

export const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='#'>Navbar</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        {navButtons.map(
                            ({text, link}) => (
                            <li key={text} className='nav-item'>
                                <a className='nav-link' aria-current='page' target="_blank" href={link}>{text}</a>
                            </li>)
                        )}

                        {/* key = identificador unico de React para asignarle funcionalidad posteriormente.
                        Dentro de una iteracion cada elemento necesita su peopia key */}

                    </ul>
                </div>
            </div>
        </nav>
    )
}