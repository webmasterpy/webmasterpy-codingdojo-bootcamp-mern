import React, {useState} from 'react'

const ListPokemon = () => {

    const [listas, setLista] = useState([]);

    const getListadoPokemons = ()=> {

        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")   
            .then(response =>  response.json())
            .then(response => {
                //console.log(response.results);
                setLista(response.results)
            }).catch(error =>{
                console.log(error);
            });
    }

    return (
        <>
        <div className='col-lg-8 mx-auto mt-5 centro'>
            <button className='btn btn-default margen-abajo' onClick={ ()=> getListadoPokemons() }>Fetch Pokemon</button>
            <ul className="list-group text-left">
            {
                listas.map((lista, index)=>(
                    <li class="list-group-item" key={index}>-> <b>{lista.name}</b></li>
                ))
            }
            </ul>
        </div>
        </>
    )
}

export default ListPokemon