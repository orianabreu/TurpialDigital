import React from "react";
import * as S from "./styles";
import { FaWhatsappSquare } from "react-icons/fa";

export default function ChatButton() {
  return (
    <S.ChatIconContainer
      href='https://api.whatsapp.com/send?phone=34652483672&text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20de%20vuestros%20servicios%20y%20c%C3%B3mo%20puedo%20generar%20m%C3%A1s%20ventas%20para%20mi%20negocio'
      target='_blank'
    >
      <div className='overlay' />
      <FaWhatsappSquare />
    </S.ChatIconContainer>
  );
}
