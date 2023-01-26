import React from 'react'
import { useNavigate } from 'react-router-dom';


const Buscador = (props) => {

    const navigate = useNavigate();

    const {buscador, setBuscador} = props;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate(`/${buscador.categoria}/${buscador.id}`, {replace: true});
    }

    const onChangeHandler = (e) => {
        setBuscador({
        ...buscador,
        [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={onSubmitHandler} className="row mt-5">
            <div className="col-sm-6 form-group">
                <div className="row">
                    <label htmlFor="categoria" className="col-sm-4">Buscar: </label>
                    <select onChange={onChangeHandler} className="col-sm-8 form-control" name="categoria" value={setBuscador.categoria}>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="species">Species</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
            </div>

            <div className="col-sm-6 form-group">
                <div className="row">
                    <div className="form-group col-sm-5 row">
                        <label htmlFor="id" className="col-sm-4"> ID: </label>
                        <input onChange={onChangeHandler} className="col-sm-8 form-control"  type="number" name="id" value={setBuscador.id}/>
                    </div>
                    <div className="form-group col-sm-7">
                        <button className="col-sm-12 btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Buscador