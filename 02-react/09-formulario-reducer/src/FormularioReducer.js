import React, {useReducer} from 'react'

export const FormularioReducer = () => {

    const initialState = {
        txtNombre:{
            value: '',
            error: null
        },
        txtApellido:{
            value: '',
            error: null
        },
        txtCorreo:{
            value: '',
            error: null
        },
        txtPass:{
            value: '',
            error: null
        },
    }

    const [state, dispatch] = useReducer(formReducer, initialState)

    function formReducer(state, action){
        let errorAux = null;
        // Atencion payload action
        if(action.type === "txtNombre" && action.payload.length<3 && action.payload.length >0) errorAux = "Nombre debe tener almenos 3 caracteres";
        if(action.type === "txtApellido" && action.payload.length<3) errorAux = "Apellido debe tener almenos 3 caracteres";
        if(action.type === "txtCorreo" && action.payload.length<=10) errorAux = "Correo debe tener almenos 10 caracteres";
        if(action.type === "txtPass" && action.payload.length<=10) errorAux = "Password debe tener almenos 10 caracteres";
        return {
            ...state,
            [action.type] : { value: action.payload, error: errorAux }
        }
    }

    function adminForm(evento){
        const {name, value} = evento.target;
        dispatch({
            type: name,
            payload: value,
        });
    }

    return (
        <>
        <div className='row espacios'>
            <form className="col-lg-6 " onSubmit={(e)=> e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="txtNombre">Nombre</label>
                    <input type="text" className="form-control" id="txtNombre" name="txtNombre" onChange={adminForm}/>
                    {state.txtNombre.error !== null && (<p className='text-danger'>{state.txtNombre.error}</p>)}
                </div>
                <div className="form-group">
                    <label htmlFor="txtApellido">Apellido</label>
                    <input type="text" className="form-control" id="txtApellido" name="txtApellido" onChange={adminForm}/>
                    {state.txtApellido.error !== null && (<p className='text-danger'>{state.txtApellido.error}</p>)}
                </div>
                <div className="form-group">
                    <label htmlFor="txtCorreo">Correo</label>
                    <input type="email" className="form-control" id="txtCorreo" name="txtCorreo" onChange={adminForm}/>
                    {state.txtCorreo.error !== null && (<p className='text-danger'>{state.txtCorreo.error}</p>)}
                </div>
                <div className="form-group">
                    <label htmlFor="txtPass">Password</label>
                    <input type="password" className="form-control" id="txtPass" name="txtPass" onChange={adminForm}/>
                    {state.txtPass.error !== null && (<p className='text-danger'>{state.txtPass.error}</p>)}
                </div>
                <div className="form-group">
                    <label htmlFor="txtConfirm">Confirma Password</label>
                    <input type="password" className="form-control" id="txtConfirm" onChange={adminForm}/>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <div className="col-lg-6 bordes">
                <p>Nombre: <b>{state.txtNombre.value}</b></p>
                <p>Apellido: <b>{state.txtApellido.value}</b></p>
                <p>Email: <b>{state.txtCorreo.value}</b></p>
                <p>Password: <b>{state.txtPass.value}</b></p>
                <p>Confirmar: <b>{state.txtPass.value}</b></p>
            </div>
        </div>
        </>
    )
}

export default FormularioReducer