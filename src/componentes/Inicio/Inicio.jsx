import { Link } from "react-router-dom";
import Carrusel from "../Carrusel/Carrusel";
import Acordiones from "../Accordion/Accordion";
import FormFAQ from "../Form/FormFAQ";

const Inicio = () => {
    return (
        <>
            <div className="flex flex-col mb-5 text-primary">
                <div className="flex items-start justify-around m-5 gap-4 lg:m-10 lg:px-10">
                    <div className="max-w-lg flex justify-center flex-col items-center text-center">
                        <img className="w-80" src="/imagenes/TtLogo2.png" alt="logo color" />
                        <h2 className="text-3xl font-title">Somos la nueva forma de comprar tus entradas.</h2>
                        <h3 className="font-normal text-xl">Compra y vende tus entradas de forma segura y confiable</h3>
                        <Link to="/productos" className="m-4 p-4 text-white bg-primary hover:bg-light-green rounded-3xl w-80 duration-500">Comienza ahora</Link>
                    </div>
                    <div className="w-auto hidden lg:block">
                        <img className="img-mujer1 w-full h-full object-cover object-center rounded-tl-3xl rounded-br-3xl" src="imagenes/img1.jpg" alt="img-inicio1" />
                    </div>
                </div>
                <div className="text-center flex justify-center p-5 text-xl">
                    <h3 className="w-4/5 lg:w-3/5">Ofrecemos un servicio de calidad basado en la atención, el respeto, confianza, calidez y la responsabilidad que nos caracterizan.</h3>
                </div>
                <div className="flex items-center justify-around m-10 flex-wrap sm:flex-nowrap">
                    <div className="w-full sm:w-1/2 mb-8 sm:mb-0 flex justify-center">
                        <div className="flex justify-center m-1 p-1 w-full sm:w-96">
                            <img className="img-personas-flor rounded-tr-3xl rounded-bl-3xl m-4" src="/imagenes/Flor.personas.png" alt="persona-1-flor" />
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 flex">
                        <div className="flex flex-col justify-center items-center w-full sm:w-80 mx-auto my-auto">
                            <h2 className="font-title text-2xl">Elige el evento que mas deseas de forma segura.</h2>
                            <p>A través de nuestro sitio podras conseguir las entradas que necesitas para tus eventos y de la forma mas segura ya que: </p>
                            <ul className="flex flex-col items-start list-disc">
                                <li>Contamos con verificacion de identidad</li>
                                <li>Nuestro sistema de deteccion de tickets falsos es el mas desarrollado ya que nos apoyamos de inteligencia artificial</li>
                                <li>Aceptamos pagos a traves de Webpay para asegurar que no sufras estafas</li>
                                <li>Todos nuestros vendedores estan verificados por un sistema completo</li>
                                
                            </ul>
                            <p className="self-start my-3">Y mucho más.</p>
                            <div>
                                <Link to="/productos" className="m-4 p-3 text-white bg-primary hover:bg-light-green rounded-3xl w-80 flex justify-center content-center duration-500">Comienza ahora</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="section1" className="px-8 pt-5">
                    <div className="flex-col items-center text-start md:text-center">
                        <p className="text-3xl font-title mb-4">En 3 pasos puedes comprar tu ticket </p>
                        <p>Sigue los pasos e inicia el camino a tu proximo evento</p>
                    </div>
                    <div className="flex justify-center items-center mb-4">
                        <div className="p-0">
                            <div className="flex flex-col items-center sm:flex-row sm:justify-center px-2 my-4">
                                <div className="mb-2 sm:mb-0 sm:mr-4 max-w-lg">
                                    <div className="flex flex-row items-center">
                                        <p className="text-6xl">1</p>
                                        <p className="text-3xl m-1.5 font-title">Registrate</p>
                                    </div>
                                    <div className="w-full sm:w-96">
                                        <p>Contamos con un sistema de registro tanto de vendedores como de compradores, para poder dar una mayor seguridad.</p>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-40 my-2">
                                <img src="/imagenes/bro2.png" alt="bros" />

                                    {/* <img src="/imagenes/bro.png" className="top-0 relative -translate-y-16" alt="bros" /> */}
                                </div>
                            </div>
                            <div className="flex flex-col items-center sm:flex-row sm:justify-center px-2 mb-8 mt-7">
                                <div className="mb-4 sm:mb-0 sm:mr-4 max-w-lg">
                                    <div className="flex flex-row items-center">
                                        <p className="text-6xl">2</p>
                                        <p className="text-3xl m-1.5 font-title">Busca tu evento</p>
                                    </div>
                                    <div className="w-full sm:w-96">
                                        <p>Ingresa a la seccion de eventos donde podras encontrar conciertos, eventos deportivos y muchas experiencias mas.</p>
                                    </div>
                                </div>
                                <div>
                                    <img src="/imagenes/bro1.png" alt="bros" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center sm:flex-row sm:justify-center px-2">
                                <div className="mb-4 sm:mb-0 sm:mr-4 max-w-lg">
                                    <div className="flex flex-row items-center">
                                        <p className="text-6xl">3</p>
                                        <p className="text-3xl m-1.5 font-title max-w-80">Conéctate y finaliza la compra de tu ticket</p>
                                    </div>
                                    <div className="w-full sm:w-96">
                                        <p>Finalizando este ultimo paso estas listo para poder disfrutar de las mejores experiencias con la mayor seguridad de cumplirlas.</p>
                                    </div>
                                </div>
                                <div>
                                <img src="/imagenes/bro.png" className="top-0 relative -translate-y-16" alt="bros" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center my-3">
                        <Link to="/productos" className="m-4 p-4 text-white bg-primary hover:bg-light-green rounded-3xl w-80 flex justify-center content-center duration-500">Comienza Ahora</Link>
                    </div>
                </div>
                {/* <div id="section2" className="text-center text-2xl pt-8">
                    <p className="font-title">Conoce que opinan nuestros pacientes</p>
                </div>
                <div>
                    <Carrusel />
                </div> */}
                <div id="section3">
                    <p className="flex justify-center text-2xl font-title py-3">Preguntas frecuentes</p>
                </div>
                <div className="flex justify-center">
                    <Acordiones />
                </div>
                <div className="flex justify-center">
                    <Link to="/productos" className="m-4 p-4 text-white bg-primary hover:bg-light-green rounded-3xl w-80 flex justify-center content-center duration-500">Comienza ahora</Link>
                </div>
                <div id="section4" className="pt-5 px-8">
                    <div className="flex-col justify-center mb-4">
                        <p className="text-center text-2xl font-title mb-3">Contactanos</p>
                        <p className="text-center text-xl">¿Tienes alguna duda? o ¿Deseas dejarnos tu opinión? Escríbenos, estamos aquí para lo que necesites.</p>
                    </div>
                    <div>
                        <FormFAQ />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inicio;
