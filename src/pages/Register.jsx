import React, { useState, useTransition } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { URL_API } from '../../config'

const Register = () => {
    const initialValues = {username: '', password: ''}
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState(initialValues)
    const [repeatUsername, setRepeatUsername] = useState(false)
    const handleChangeInput = (value, name) =>{
        setFormValues(()=>{
            return {...formValues, [name]:value}
        })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const response = await fetch(URL_API + '/register', {method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: formValues.username, password: formValues.password}
        )}).then(res => res.json())
        if(response.status == 201){
            navigate('/login')
        }
        if(response.status == 400){
            setRepeatUsername(true)
        }
    }
    return (
    <div className='registerAndLogin'>
        <div className='contenedorDelcontForm'>
        <div className='contenedorFormularios'>
            <div>
                <h1>Registrate aquí</h1>
            </div>
            <br />
            <form  className='formulariosRegLog' onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="username">Nombre de usuario</label>
                <input type="text" id='username' name='username' placeholder='Usuario' value={formValues.username} onChange={(e) => handleChangeInput(e.target.value, e.target.name)}/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" placeholder='Contraseña' value={formValues.password} onChange={(e) => handleChangeInput(e.target.value, e.target.name)} />    
                <input className='btnFormulario' type="submit" placeholder='enviar' value={'Enviar'} />
            </form>
            {repeatUsername && <span>El nombre de usuario ya se encuentra en uso</span>}
            <span>Ya tienes cuenta?<Link to={'/login'}>Click aqui</Link></span>
        </div>
        </div>
    </div>
    )
}

export default Register