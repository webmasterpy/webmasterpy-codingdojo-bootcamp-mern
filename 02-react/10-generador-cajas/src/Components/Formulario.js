import React from 'react'

const Formulario = (props) => {

    const { cajas, setCajas } = props;
    const { detalles, setDetalles} = props;

    // Al cargar el texto va seteando el detalles de datos.
    const handleChange = (e) => {
        setDetalles({
            ...detalles,
            [e.target.name]: e.target.value,
        })
    }

    // Al enviar el formulario registramos/ seteamos los detalles creados en caja
    const handleSubmit = (e) => {
        e.preventDefault();
        setCajas(caja => [...caja, {"color": detalles.color, "size": detalles.size}]);
        //props.detalles.color = "";
    }

    return (
        <>
        <div className="row bordes">
            <form className="mx-auto card-header" onSubmit={handleSubmit}>
                <h5 className="card-title clear-both">Generador de Cajas</h5>
                <div className='form-inline'>
                    <div className="form-group ">
                        <label htmlFor="color" className="col-sm-3 col-form-label">Color</label>
                        <input type="text" className="form-control" id="color" name="color" onChange={handleChange} value={props.detalles.color.value}/>
                    </div>

                    <div className="form-group ">
                        <label htmlFor="size" className="col-sm-3 col-form-label">Tamaño</label>
                        <input type="number" className="form-control" id="size" name="size" onChange={handleChange}/>
                    </div>

                    <button className="btn btn-primary mb-2" value="">Agregar</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Formulario