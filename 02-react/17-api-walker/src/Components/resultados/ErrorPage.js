import React from 'react'

const ErrorPage = () => {
  return (
    <>
    <div className='card text-center'>
      <h2>"These aren't the droids you're looking for"</h2>
      <img className="img-rounded" style={{width:"400px"}} src={`${process.env.PUBLIC_URL}/assets/obi.png`}  alt="logo"/>
    </div>
    </>
  )
}

export default ErrorPage