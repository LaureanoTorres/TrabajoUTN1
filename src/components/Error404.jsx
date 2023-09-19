import React from 'react'

const Error404 = ({mensaje}) => {
  return (
    <div style={{color: 'red', backgroundcolor: 'black'}}>
        Error 404: {mensaje}
    </div>
  )
}

export default Error404