import React, { useEffect, useState, } from "react";
import axios from "axios";
import People from "./resultados/People";
import ErrorPage from "./resultados/ErrorPage";

const Resultado = (props) => {
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
        <div className="container">
          {/* {console.log(responseError)} */}
          {
          
            responseError===false
            ?(<ErrorPage/>)
            :
            {
                'people': <People responseData={responseData} setResponseData={setResponseData}/>
            }[buscador]
          }
        </div>
    );  
}

export default Resultado