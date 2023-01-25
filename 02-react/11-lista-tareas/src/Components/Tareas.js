import React from 'react'

const Tareas = (props) => {

    const {tareas, setTareas} = props;
    
    const onDelete = (nombre) =>{
        //console.log(tareas);
        let nuevaTarea = tareas.filter((tarea) => tarea.tarea !== nombre);
        //console.log(nuevaTarea);
        setTareas(nuevaTarea)
    }



    return (
    <>
    <div><b>Lista de Tareas</b></div>
    <hr/>
    <div className="form-group">
        {   
            tareas.map((lista)=>(
                <>
                <div className='bordes listado-bloques'>
                    {/* <h5 className='listado'>{lista.tarea}</h5> */}
                    <label
                        style={{ textDecorationLine: lista.isComplete ? "line-through" : 'none' }}
                        htmlFor="checkbox"
                        className='listado'
                        >
                        {lista.tarea}
                        </label>
                    <div className='listado'>
                        <input
                            type="checkbox"
                            name=""
                            checked={lista.isComplete}
                            className="listado"
                        ></input> 
                        <button className='btn btn-sm btn-danger listado' onClick={ ()=> onDelete(lista.tarea) }> Borrar </button>
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