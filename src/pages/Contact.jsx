import React from 'react'

const Contact = () => {
  return (
    <div className='formulario'>

      <h2>Para dudas y consultas llene el formulario y nos estaremos comunicando</h2>
      <label for='nombre'>Escriba su nombre completo</label>
      <input type="text" id='nombre' name='nombre' required /> <br/>

      <label for='fechaNacimiento'>Coloque su fecha de nacimiento</label>
      <input type="date" id='fechaNacimiento' name='fechaNacimiento' required /> <br/>

      <label for='telefono'>Escriba su numero telefónico</label>
      <input type="tel" id='telefono' name='telefono' /> <br/>

      <label for='email'>Escriba su correo electrónico</label>
      <input type="email" id='email' name='email' required /> <br/>

      <label for="message">Si tiene alguna pregunta o comentario puede escribirlo aquí:</label> <br/>
      <textarea id="message" name="message" rows="4" cols="50" required></textarea><br/>



      <label for='terminosCondiciones'> ¿Acepta nuestros terminos y condiciones?</label>
      <input type="checkbox" id='terminosCondiciones' name='terminosCondiciones' required /><br/>
      {/* <a href="/Terminos-y-Condiciones" target='_blank'></a VER LUEGO> */}

      <input type="submit" value='Enviar' id='formSubmit' />

    </div>
    
  )
}

export default Contact