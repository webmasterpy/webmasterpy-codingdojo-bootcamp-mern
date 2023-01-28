import React from 'react'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-primary">
        <img src={props.logo} width="80" className="App-logo" alt="logo"/>
        <div className="text-white">Formulario de Alta - <b>Parte 3</b></div>
    </nav>
  )
}

export default Navbar