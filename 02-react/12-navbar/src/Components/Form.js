import React , { useContext } from 'react'
import Context from './Context';

const Form = () => {

    const contexto = useContext(Context);

    return (
    <>
        <div className="row bordes">
            <form className="mx-auto card-header">
                <div className='form-inline'>
                    <div className="form-group ">
                        <label htmlFor="nombre" className="col-sm-3 col-form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" name="nombre" onChange={(e) => contexto.setNombre(e.target.value)}/>
                    </div>
                </div>
            </form>
        </div>
    </>
    )
}

export default Form