import React, {useReducer} from 'react'


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
    }
}

const FormularioReducerMail = () => {

    const [state, dispatch] = useReducer(formReducer, initialState)

    function formReducer(state, action){
        console.log(action);
        let errorAux = null;
        // Atencion payload action
        if(action.type === "txtNombre" && action.payload.length<3 && action.payload.length >0) errorAux = "Nombre debe tener almenos 3 caracteres";
        if(action.type === "txtApellido" && action.payload.length<3) errorAux = "Apellido debe tener almenos 3 caracteres";
        if(action.type === "txtCorreo" && action.payload.length<10){
            errorAux = "Correo debe tener almenos 10 caracteres";
        }else if(action.type === "txtCorreo" && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(action.payload)) ) {
            errorAux = "Correo no es valido";
        }
        return {
            ...state,
            [action.type] : { value: action.payload, error: errorAux }
        }
    }

    function formularioValidation(evento){
        const {name, value} = evento.target;
        dispatch({
            type: name,
            payload: value,
        });
    }

    return (
        <form className="col-lg-6 " onSubmit={(e)=> e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="txtNombre">Nombre</label>
                <input type="text" className="form-control" id="txtNombre" name="txtNombre" onChange={formularioValidation}/>
                {state.txtNombre.error !== null && (<p className='text-danger'>{state.txtNombre.error}</p>)}
            </div>
            <div className="form-group">
                <label htmlFor="txtApellido">Apellido</label>
                <input type="text" className="form-control" id="txtApellido" name="txtApellido" onChange={formularioValidation}/>
                {state.txtApellido.error !== null && (<p className='text-danger'>{state.txtApellido.error}</p>)}
            </div>
            <div className="form-group">
                <label htmlFor="txtCorreo">Correo</label>
                <input type="email" className="form-control" id="txtCorreo" name="txtCorreo" onChange={formularioValidation}/>
                {state.txtCorreo.error !== null && (<p className='text-danger'>{state.txtCorreo.error}</p>)}
            </div>

            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}

export default FormularioReducerMail