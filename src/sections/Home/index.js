import React from 'react';
import WindowSection from "../../components/WindowSection";
import Button from '../../components/Button';
import * as S from './styles';
import HomeVideo from '../../assets/video/videohome.mp4';
import HomeImage from '../../assets/img/mobilehomeimg.jpg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typed from "react-typed";

export default function Home(){

    const isMobile = useMediaQuery('(max-width:484px)');

    return (
        <WindowSection id='home'>

            {isMobile ? 
                <S.VideoContainer isMobile={isMobile}>
                    <S.HomeImg src={HomeImage} alt='image'/> 
                </S.VideoContainer>       
            :
                <S.VideoContainer isMobile={isMobile}>
                    <S.VideoHome isMobile={isMobile} loop autoPlay muted>
                        <source src={HomeVideo} type='video/mp4'/>
                    </S.VideoHome>
                </S.VideoContainer>
            }

            <S.TextOverlay isMobile={isMobile}>
                <S.HomeText isMobile={isMobile}>
                    Hacemos crecer tu negocio con marketing {''}
                    <Typed
                        strings={[
                        "creativo",
                        "estratégico", 
                        "promocional",
                        "interactivo",
                        "digital"
                        ]}
                        typeSpeed={80}
                        backSpeed={70}
                        backDelay={1000}
                        loop
                        style={{color:'#fdcf08'}}
                    />
                </S.HomeText>
                <Button styleType='callToAction' isMobile={isMobile}>QUIERO AUMENTAR MIS VENTAS</Button>
            </S.TextOverlay>
        </WindowSection>
    )
}