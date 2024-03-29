import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { URL_API } from '../../config'
import { verifyToken } from '../Helpers/verifyToken'


const Login = () => {
    const navigate = useNavigate()
    const initialValues = {username: '', password: ''}
    const [formValues, setFormValues] = useState(initialValues)
    const [invalidCredentials, setInvalidCredentials] = useState(false)

verifyToken()

    const handleChangeInput = (value, name)=>{
        console.log(name)
        setFormValues(()=>{
            return {...formValues, [name]:value}
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const response = await fetch(URL_API + '/login', {method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: formValues.username, password: formValues.password}
        )}).then(res => res.json())
        if(response.status == 200){
            localStorage.setItem('auth-token-app', response.accessToken)
            navigate('/home')
        }
        if(response.status == 401){
            setInvalidCredentials(true)
        }
    }

    return(
    <div className='registerAndLogin'>
        <div className='contenedorDelcontForm'>
        <div className='contenedorFormularios'>
            <div>
                <h1>Inciar Sesión</h1>
            </div>
            <br />
            <form className='formulariosRegLog' onSubmit={(e)=> handleSubmit(e)}>
                <label htmlFor="username">Nombre de usuario</label>
                <input type="text" id='username' name='username' placeholder='Usuario' value={formValues.username} onChange={(e)=>handleChangeInput(e.target.value, e.target.name)}/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" placeholder='Contraseña' value={formValues.password} onChange={(e)=>handleChangeInput(e.target.value, e.target.name)} />    
                <input className='btnFormulario' type="submit" value={'Enviar'} />
            </form>
            {invalidCredentials && <span>Bad Request</span>}
            <span>Aun no tienes cuenta?<Link to={'/Register'}>Click aqui</Link></span>
        </div>
        </div>
    </div>
    )
}

export default Login