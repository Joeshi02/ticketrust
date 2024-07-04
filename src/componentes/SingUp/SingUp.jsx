import React, { useState, useRef } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";

const RegistroUsuarioForm = () => {
    const [usuario, setUsuario] = useState({
        nombre: "",
        email: "",
        password: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const inputNombre = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsSubmitting(true);

            // Validar si algún campo requerido está vacío
            if (!usuario.nombre || !usuario.email || !usuario.password) {
                throw new Error("Por favor complete todos los campos.");
            }

            const db = getFirestore();
            const usuariosCollection = collection(db, "usuarios");

            const usuarioNuevo = {
                nombre: usuario.nombre.trim(),
                email: usuario.email.trim(),
                password: usuario.password.trim(),
                fechaRegistro: new Date()
            };

            const docRef = await addDoc(usuariosCollection, usuarioNuevo);

            Swal.fire({
                title: "Usuario creado exitosamente",
                icon: "success"
            });

            // Limpiar los campos del formulario y resetear el estado
            setUsuario({
                nombre: "",
                email: "",
                password: ""
            });

            setIsSubmitting(false);

            // Limpiar los campos de entrada
            inputNombre.current.value = '';
            inputEmail.current.value = '';
            inputPassword.current.value = '';

        } catch (error) {
            Swal.fire({
                title: "Error al crear usuario",
                text: error.message,
                icon: "error"
            });

            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="bg-ultra-light w-full sm:w-96 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-title text-primary mb-6 text-center">Crear Usuario</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="nombre" className="block text-xl text-primary">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre completo"
                            className="w-full px-3 py-2 mt-1 text-xl border border-primary rounded-lg focus:outline-none focus:border-skyblue"
                            onChange={handleInputChange}
                            ref={inputNombre}
                            value={usuario.nombre}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-xl text-primary">Correo Electrónico:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="correo@ejemplo.com"
                            className="w-full px-3 py-2 mt-1 text-xl border border-primary rounded-lg focus:outline-none focus:border-skyblue"
                            onChange={handleInputChange}
                            ref={inputEmail}
                            value={usuario.email}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-xl text-primary">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            className="w-full px-3 py-2 mt-1 text-xl border border-primary rounded-lg focus:outline-none focus:border-skyblue"
                            onChange={handleInputChange}
                            ref={inputPassword}
                            value={usuario.password}
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full py-3 text-xl bg-light hover:bg-primary text-white rounded-lg transition duration-500"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Creando Usuario..." : "Crear Usuario"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistroUsuarioForm;
