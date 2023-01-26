import React, {useState} from 'react';
import axios from 'axios';

const ListadoPokemons = () => {

    const [listado, setListado] = useState([]);

    const onGetList = () => {
        
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(function(response){
                console.log(response.data.results);
                setListado(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    
    }

    return (
        <>
        <div className='col-lg-8 mx-auto mt-5 centro'>
            <button className='btn btn-default margen-abajo' onClick={ ()=> onGetList() }>Fetch Pokemon from Axios</button>
            <ul className="list-group text-left">
            {
                listado.map((lista, index)=>(
                    <li className="list-group-item" key={index}>-> <b>{lista.name}</b></li>
                ))
            }
            </ul>
        </div>
        </>
    )
}

export default ListadoPokemons