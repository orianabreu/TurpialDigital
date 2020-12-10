import React from 'react';
import * as S from './styles';
import WindowSection from '../../components/WindowSection';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function ConsultancyForm() {

    const isMobile = useMediaQuery('(max-width:484px)');

    return (
        <WindowSection id='myform'>

            <S.OnboardingContainer isMobile={isMobile}>
            
                <S.SectionTitle>
                    ¡Bienvenido al mundo digital! 
                </S.SectionTitle>

                <S.SeccionText>
                    Has dado el primer paso para hacer crecer tu negocio y con ello tus ganancias.<br/>Te damos las gracias por permitirnos acompañarte en el proceso. 
                    <br/>
                    <br/>
                    Comenzar es muy sencillo. Solo tienes que rellenar el siguiente formulario, escoger el horario de tu preferencia y agendar tu cita.<br/>¡Estamos ansiosos por conocerte!
                </S.SeccionText>
            
            </S.OnboardingContainer>

            <S.FormContainer1 isMobile={isMobile}>
                {/* <form> */}
                    <S.InputArea>
                        <S.Question>
                            Nombre y Apellido:
                        </S.Question>
                        <S.NewInput 
                            placeholder='Ej: Oriana'
                        />
                    </S.InputArea>
                    
                    <S.InputArea>
                        <S.Question>
                            Teléfono:
                        </S.Question>
                        <S.NewInput 
                            placeholder='Con el código de tu país'
                        />
                    </S.InputArea>
                    
                    <S.InputArea>
                        <S.Question>
                            Email:
                        </S.Question>
                        <S.NewInput 
                            placeholder='Ej: info@turpialdigital.com'
                        />
                    </S.InputArea>

                    <S.InputArea>
                        <S.Question>
                            Nombre de tu negocio:
                        </S.Question>
                        <S.NewInput 
                            placeholder='Ej: Turpial Digital'
                        />
                    </S.InputArea>

                    <S.InputArea>
                        <S.Question>
                            ¿A qué se dedica tu negocio?
                        </S.Question>
                        <S.BigInput
                            className="bigColumn"
                            isMobile={isMobile} 
                            placeholder='Ej: Somos una agencia de marketing digital'
                        />
                    </S.InputArea>

                    <S.InputArea>
                        <S.Question>
                            ¿Qué te gustaría lograr con esta asesoría?
                        </S.Question>
                        <S.BigInput
                            className="bigColumn"
                            isMobile={isMobile} 
                            placeholder='Ej: Tener una idea clara de cómo debo gestionar mi presencia digital para aumentar mis ventas'
                        />
                    </S.InputArea>

                    <S.InputArea>
                        <S.Question>
                            Si tu negocio tiene página web y redes sociales, déjanoslas aquí:
                        </S.Question>
                        <S.BigInput
                            className="bigColumn"
                            isMobile={isMobile} 
                            placeholder='Ej: turpialdigital.com / @turpialdigital_agencia'
                        />
                    </S.InputArea>
                    
                {/* </form> */}
            </S.FormContainer1>

        </WindowSection>
    )
}