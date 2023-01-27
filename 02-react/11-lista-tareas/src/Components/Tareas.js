import React from 'react'

const Tareas = (props) => {

    const {tareas, setTareas} = props;
    
    const onDelete = (nombre) =>{
        console.log(tareas);
        //let nuevaTarea = tareas.filter((tarea) => tarea.tarea !== nombre);
        //console.log(nuevaTarea);
        //setTareas(nuevaTarea);
        setTareas([...tareas].filter((item, indice)=> indice !== nombre));
    }

    return (
    <>
    <div><b>Lista de Tareas</b></div>
    <hr/>
    <div className="form-group">
        {   
            tareas.map((lista, indice)=>(
                <>
                <div className='bordes listado-bloques'>
                    {/* <h5 className='listado'>{lista.tarea}</h5> */}
                    <div className='listado'>
                        <label
                        style={{ textDecorationLine: lista.isComplete ? "line-through" : 'none' }}
                        htmlFor="checkbox"
                        >
                        {indice}- {lista.tarea}
                        </label>
                        <input
                            type="checkbox"
                            name=""
                            checked={lista.isComplete}
                            className="listado"
                        ></input> 
                        <button className='btn btn-sm btn-danger listado' onClick={ ()=> onDelete(indice) }> Borrar </button>
                    </div>
                </div>
                </>
            ))
        }
    </div>
    </>
  )
}

export default Tareas