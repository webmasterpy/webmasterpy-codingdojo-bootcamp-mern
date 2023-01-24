import React from 'react'

const Main = (props) => {
  //const {sub} = this.props;

  return (
    <div className="main">
       {props.children}
    </div>
  )
}

export default Main