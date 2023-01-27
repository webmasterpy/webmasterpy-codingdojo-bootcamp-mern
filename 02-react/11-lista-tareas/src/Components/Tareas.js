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

    const onRefresh = (indice) => {
        // const newTarea = {...tareas[indice]}
        // console.log(newTarea);
        // newTarea.estado = !newTarea.estado;
        // setTareas([...tareas].splice(indice, 1,newTarea));

        const newList = tareas.map((item,i) => {
            if (i===index) {
                return { ...item, estado: !item.estado };
            } else {
                return item;
            }
        });
        setTareas(newList);
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
                        style={{ textDecorationLine: lista.estado ? "line-through" : 'none' }}
                        htmlFor="checkbox"
                        >
                        {indice}- {lista.tarea}
                        </label>
                        <input
                            type="checkbox"
                            name=""
                            checked={lista.estado}
                            className="listado"
                            onClick={onRefresh}
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