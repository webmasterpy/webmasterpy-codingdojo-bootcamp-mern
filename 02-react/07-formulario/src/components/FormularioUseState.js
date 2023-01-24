import React, {useState} from 'react'

const FormularioUseState = () => {

    const [ getNombre, setNombre ] = useState("");
    const [ getApellido, setApellido ] = useState("");
    const [ getCorreo, setCorreo ] = useState("");
    const [ getPassword, setPassword ] = useState("");
    const [ getConfirma, setConfirma ] = useState("");

    const crearUsuario = (evento)=>{
        evento.preventDefault();
        console.log(evento);
    } 

    return (
    <>
        <div className='row bordes'>
            <form className="col-lg-5" onSubmit={crearUsuario}>
                <div className="form-group">
                    <label htmlFor="txtNombre">Nombre</label>
                    <input type="text" className="form-control" id="txtNombre" onChange={(evento)=> setNombre(evento.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="txtApellido">Apellido</label>
                    <input type="text" className="form-control" id="txtApellido" onChange={(evento)=> setApellido(evento.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="txtCorreo">Correo</label>
                    <input type="email" className="form-control" id="txtCorreo" onChange={(evento)=> setCorreo(evento.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="txtPass">Password</label>
                    <input type="password" className="form-control" id="txtPass" onChange={(evento)=> setPassword(evento.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="txtConfirm">Confirma Password</label>
                    <input type="password" className="form-control" id="txtConfirm"  onChange={(evento)=> setConfirma(evento.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <div className="col-lg-5 lineas">
                <p>Nombre: <b>{getNombre}</b></p>
                <p>Apellido: <b>{getApellido}</b></p>
                <p>Email: <b>{getCorreo}</b></p>
                <p>Password: <b>{getPassword}</b></p>
                <p>Confirmar: <b>{getConfirma}</b></p>
            </div>
        </div>
    </>
    )
}

export default FormularioUseState