import Navbar from "./componentes/Navbar/Navbar"
import Inicio from "./componentes/Inicio/Inicio"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NextUIProvider } from "@nextui-org/react"
import Footer from "./componentes/Footer/Footer"
import Productos from "./componentes/Productos/Productos"
import RegistroUsuarioForm from "./componentes/SingUp/SingUp"



function App() {

  return (
    <>
      <NextUIProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/SingUp" element={<RegistroUsuarioForm/>}/>
            </Routes>
          <Footer />
        </BrowserRouter>
      </NextUIProvider>
    </>
  )
}

export default App
