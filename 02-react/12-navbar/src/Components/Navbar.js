import React, {useContext} from 'react'
import Context from './Context'

const Navbar = () => {

    const contexto = useContext(Context)

    return (
    <>
    <nav className="navbar navbar-light bg-light justify-content-between fondo-nav">
        <span className="navbar-brand text-white"></span>
        <div className="form-inline">
            <span className="navbar-brand mb-0 h1 text-white">Hola {contexto.nombre}</span>
        </div>
    </nav>
    </>
  )
}

export default Navbar