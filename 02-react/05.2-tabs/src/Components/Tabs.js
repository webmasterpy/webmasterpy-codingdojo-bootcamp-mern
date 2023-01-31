import React, {useState} from 'react';

const Tabs = (props) => {
  const [idxSelected, setIdxSelected] = useState(0);
  const onChangeHandler = (e, value) => {
    setIdxSelected(value);
  }

  return (
    <div className="container mt-5">
      <nav className="nav nav-pills flex-column flex-sm-row">
      {
        props.listadoTab.map( (tab, i) => {
          return(
              <a key={i} className={(idxSelected === i)?"flex-sm-fill text-sm-center nav-link active":"flex-sm-fill text-sm-center nav-link"} id={i} onClick={ (e) => onChangeHandler(e, i) } href="/#">
                  {tab.label} 
              </a>
          )
        })
      }
      </nav>

      <div className="card mt-3">
        {<p>{props.listadoTab[idxSelected].content}</p>}
      </div>
    </div>
    );
}

export default Tabs;