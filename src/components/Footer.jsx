import React from 'react'
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'


const Footer = () => {
    return (
        <footer>
        <>
        <div className="container">
            <div className="contact-info">
                <h3 className='tituloInfos'>Contáctanos</h3>
                <br/>
                <p>
                    <span className='spanFooterInfo'>Correo: </span> TechStore@gmail.com
                </p>
                <p>
                    <span>Telefono: </span> +543515 456 789
                </p>
                <p>
                    <span>Dirección: </span> Bv. Mitre 450 - Córdoba - Argentina.
                </p>
            </div>
            <div className="linksFooter">
                <h3 className='tituloInfos'>Enlaces útiles</h3>
                <br/>
                    <ul>
                    <li><a href="#">Preguntas frecuentes.</a></li>
                    <li><a href="#">Términos y condiciones.</a></li>
                    <li><a href="#">Política de privacidad.</a></li>
                    <li><a href="#">Ayuda.</a></li>
                    </ul>

            </div>
            <div className="redesSociales">
                <h3 className='tituloInfos'>Seguinos en Redes Sociales</h3>
                <br/>
                <a href="#" className="linkRedesSociales"><BsFacebook className='logoFacebook'/> Facebook: @TechStoreOficial</a> 
                <a href="#" className="linkRedesSociales"><AiOutlineTwitter className='logoTwitter'/> Twitter: @TechStoreOficial</a> 
                <a href="#" className="linkRedesSociales"><AiOutlineInstagram className='logoInstagram'/> Instagram: @TechStoreOficial</a>
            </div>
            
            
        </div>

        <div className="FinalDelFooter">
                <p>&copy; TechStore - 2023. Tienda de Productos Electrónicos. Todos los derechos reservados.</p>
            </div>
        </>
        </footer>
    );
    };
    

export default Footer