import React, { useEffect, useState, } from "react";
import axios from "axios";

const People = (props) => {
    const { buscador, setBuscador } = props;
    const [responseData, setResponseData] = useState('');
    const [responseError, setResponseError] = useState(false);
  
    useEffect(() => {
      axios
        .get(`http://swapi.dev/api/${buscador.categoria}/${buscador.id}/`)
        .then((response) => {
          setResponseData(response.data);
          setResponseError(false);
        })
        .catch((error) => {
          setResponseError(true);
        });
    }, [buscador])

    return (
        <div className='card mt-4 '>
            <div className='card-header text-secondary'>
                <h3>{responseData.name}</h3>
                <em>Gender: {responseData.gender}</em>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Height: {responseData.height}</li>
                <li className="list-group-item">Hair Color: {responseData.hair_color}</li>
                <li className="list-group-item">Birth Year: {responseData.birth_year}</li>
                <li className="list-group-item">Mass: {responseData.mass}</li>
                {/* <li className="list-group-item">Homeworld: {homeworld}</li> */}
            </ul>
        </div>
    )
}

export default People