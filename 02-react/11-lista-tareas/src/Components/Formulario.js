import React, {useState} from 'react'

const Formulario = (props) => {

    const { tareas, setTareas } = props;
    const [ actividad, setActividad] = useState('');

    // Al cargar el texto va seteando el detalles de datos.
    const handleChange = (e) => {
        setActividad({ [e.target.name]: e.target.value})
    }

    // Al enviar el formulario registramos/ seteamos los detalles creados en tarea
    const handleSubmit = (e) => {
        e.preventDefault();
        setTareas([...tareas, actividad])
        // let task = {
        //     name: input,
        //     isComplete: false,
        // };
    }

    return (
    <>
        <div className="row">
            <form className="mx-auto card-header" onSubmit={handleSubmit}>
                <h5 className="card-title clear-both">Registrar Tarea</h5>
                <div className='form-inline'>
                    <div className="form-group ">
                        <label htmlFor="tarea" className="col-sm-3 col-form-label">Tarea</label>
                        <input type="text" className="form-control" id="tarea" name="tarea" onChange={handleChange}/>
                    </div>
                    <button className="btn btn-primary mb-2" type="submit" value="">Agregar</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Formulario