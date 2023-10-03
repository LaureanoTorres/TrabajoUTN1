import React from 'react'

const Contact = () => {
  return (


    <div className='contenedorDeContenedorFormulario'>
    <div className='contendedorFormulario'>
    <div className='formulario'>

      <h2>Por dudas y consultas llene el formulario y nos estaremos comunicando con usted.</h2>
      <br/>
      <label htmlFor='nombre'>Nombre completo: </label>
      <input type="text" id='nombre' name='nombre' required /> <br/>

      <label htmlFor='fechaNacimiento'>Fecha de nacimiento: </label>
      <input type="date" id='fechaNacimiento' name='fechaNacimiento' required /> <br/>

      <label htmlFor='telefono'>Numero telefónico: </label>
      <input type="tel" id='telefono' name='telefono' /> <br/>

      <label htmlFor='email'>Correo electrónico: </label>
      <input type="email" id='email' name='email' required /> <br/>

      <label htmlFor="message">Si tiene preguntas o comentarios puede <br/> escribirlo aquí:</label>
      <textarea id="message" name="message" rows="4" cols="50" required></textarea><br/>


      <div  className='checkboxDerecha'>
      <label htmlFor='terminosCondiciones' className='terminosCondiciones'> ¿Acepta nuestros terminos y condiciones?</label>
      <input type="checkbox" name='terminosCondiciones' required /><br/>
      </div>
      <br/>
      <input type="submit" value='Enviar' id='formSubmit' />

    </div>
    </div>
    </div>
  )
}

export default Contact