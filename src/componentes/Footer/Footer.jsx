import { ChevronUp } from "lucide-react";
import linkedinIcon from './assets/linkedin.svg'
import facebookIcon from './assets/facebook.svg'
import twitterIcon from './assets/twitter.svg'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className='h-12  text-skyblue hover:text-primary text-base md:text-xl lg:text-2xl flex justify-center items-center'>
                <a className='flex items-center w-full h-full justify-center' href="#top"><ChevronUp size={28}/> Subir</a>
            </div>
            <div className="flex flex-col justify-items-center h-auto text-white justify-around text-base py-9 px-10 font-light">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-7 md:mt-8 ">
                    <div className="w-full md:w-fit flex flex-col flex-wrap h-32 md:h-auto gap-4 md:justify-self-center self-end md:self-auto mb-0">
                        <a href='/' className='font-title text-xl'>Home</a>
                        <a href='/#section1' className='basis-7'>Cómo funciona</a>
                        <a href='/#section2' className='basis-7'>Opiniones</a>
                        <a href='/#section3' className='basis-7'>Preguntas frecuentes</a>
                        <a href='/#section4' className='basis-7'>Contáctanos</a>
                        <Link to='/professionals' className='basis-7'>Profesionales</Link>
                    </div>
                    <div className="w-full md:w-fit flex flex-col gap-4 md:justify-self-center mb-3">
                        <p className='font-title text-xl'>Legal</p>
                        <p>Aviso de privacidad</p>
                        <p>Término y condiciones</p>
                    </div>
                    <div className="w-full md:w-fit flex flex-col md:justify-self-center gap-4 mb-3">
                        <p className='font-title text-xl'>Contacto</p>
                        <div className="flex md:gap-2 gap-8">
                            <p>Numero de contacto:</p>
                            <div>
                                <p className='whitespace-nowrap	'>+569123456789</p>
                            </div>
                        </div>
                        <a href="mailto:ticketrust@gmail.com">ticketrust@gmail.com</a>
                    </div>
                    <div className="w-full md:w-fit flex flex-col gap-4 md:justify-self-center mb-3">
                        <p className='font-title text-xl'>Nuestras redes</p>
                        <div className='flex gap-4 justify-around' >
                            <img src={facebookIcon} />
                            <img src={twitterIcon} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:items-center justify-end box-border pt-11 md:text-center">
                    <p>© 2024. Todos los derechos reservados </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer