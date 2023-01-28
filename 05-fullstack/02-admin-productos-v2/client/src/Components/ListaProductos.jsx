import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ListaProductos = (props) => {

    const [productos, setProductos] = useState([]);
    const [cargas, setCargas] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/productos/')
            .then(res=>{
                //console.log("LLEGO LOS DATOS DE PRODUCTOS:", res.data)
                setProductos(res.data);
                setCargas(true);
            }).catch(err=>{console.log(err)});
    },[]);

    console.log("Listado: ",productos.productos)

    return (
    <>
        {
        (cargas)
        ?
            <table className='table table-border'>
                <thead>
                    <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                {
                    productos.productos.map((producto, index)=>{
                        let enlace = "/producto/"+producto._id;
                        return (
                            <tr key={index}>
                                <th scope="row"><a href={enlace}>Ver Detalle</a></th>
                                <td>{producto.titulo}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.descripcion}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        :
        'No existe productos cargados'
        }
    </>
    )
}

export default ListaProductos