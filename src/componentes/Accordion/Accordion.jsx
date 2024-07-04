import React from "react";
import { AccordionItem, Accordion } from "@nextui-org/accordion";

const Acordiones = () => {
  const defaultContent = [
    "Toda transaccion dentro del sitio es segura ya que contamos con verificacion de identidad por parte de los vendedores y a su vez tenemos un sistema de machine learing para poder identificar que los tikets sean originales.",
    "Dentro del sitio podras encontrar evemtos como conciertos, recitales, eventos masivos como Lollapalooza, eventos deportivos y mucho mas.",
    "Ticketrust cuenta con webpay para facilitar el proceso de compra y venta.",
    "Debes ir a la sección de Productos donde podras encontrar separados por categorias las entradas de los proximos eventos.",
  ];

  return (
    <div className="w-4/5 md:w-2/3 text-primary">
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title={<span className="text-light">¿Es segura la compra?</span>}>
          {defaultContent[0]}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title={<span className="text-light">¿Qué tipo de eventos puedo encontrar?</span>}>
          {defaultContent[1]}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title={<span className="text-light">¿Qué medios de pago utilizan?</span>}>
          {defaultContent[2]}
        </AccordionItem>
        <AccordionItem key="4" aria-label="Accordion 4" title={<span className="text-light">¿Cómo consigo mis tickets?</span>}>
          {defaultContent[3]}
        </AccordionItem>
        
      </Accordion>
    </div>
  );
}

export default Acordiones;
