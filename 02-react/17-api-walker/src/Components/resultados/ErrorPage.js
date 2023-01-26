import React from 'react'

const ErrorPage = () => {
  return (
    <>
    <h2 className="display-3 text-center mt-3">"These aren't the droids you're looking for" </h2>
    <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/obi.png`}  alt="logo"/>
    </>
  )
}

export default ErrorPage