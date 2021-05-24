import React, { useState } from 'react';
import * as S from './styles';
import WindowSection from '../../components/WindowSection';
import Button from '../../components/Button';
import useForm from '../../components/useForm';
import validateForm from '../../components/validateForm/index';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DateAndTimePicker from '../../components/DatePicker';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '297px',
      },
    },
  }));

const otherStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(2),
  },
  withoutLabel: {
    marginTop: theme.spacing(2),
  },
  textField: {
    width: '30ch',
  },
}));



export default function ConsultancyForm({setFormIsOpen, setSnackBarIsOpen}) {

    const isMobile = useMediaQuery('(max-width:484px)');
    const isBigScreen = useMediaQuery('(min-width:1562px)');

    const styles = useStyles();
    const classes = otherStyles();

    const {values, errors, handleChange, handleSubmit} = useForm(submit, validateForm);


    function submit() {
        setSnackBarIsOpen(true);
        setFormIsOpen(false);
    }

    return (
        <WindowSection id='myform'>
            
            <S.OnboardingContainer isMobile={isMobile}>
            
                <S.SectionTitle>
                    ¡Bienvenido al mundo digital! 
                </S.SectionTitle>

                <S.SectionText isBigScreen={isBigScreen} isMobile={isMobile}>
                    ¡Enhorabuena! Has dado el primer paso para hacer crecer tu negocio y, con ello, tus ganancias. Te damos las gracias por permitirnos acompañarte en el proceso. 
                    <br/>
                    <br/>
                    Comenzar es muy sencillo. Solo tienes que rellenar el siguiente formulario, escoger el horario de tu preferencia y agendar tu cita. ¡Estamos ansiosos por conocerte!
                </S.SectionText>

                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <div className={styles.root}>
                        <TextField 
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Nombre y Apellido'
                        isMobile={isMobile}
                        name='username'
                        vale={values.username}
                        onChange={handleChange}
                        helperText={errors.username && <S.ErrorText>{errors.username}</S.ErrorText>}
                        />

                        <TextField 
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Teléfono (con el código de tu país)'
                        isMobile={isMobile}
                        name='phone'
                        vale={values.phone}
                        onChange={handleChange}
                        helperText={errors.phone && <S.ErrorText>{errors.phone}</S.ErrorText>}
                        />

                        <TextField 
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Email'
                        isMobile={isMobile}
                        name='email'
                        vale={values.email}
                        onChange={handleChange}
                        helperText={errors.email && <S.ErrorText>{errors.email}</S.ErrorText>}
                        />
                    </div>
                    
                    <div className={classes.root}>    

                        <TextField
                            id="filled-full-width"
                            className={classes.margin}
                            fullWidth
                            variant="filled"
                            label="Nombre de tu negocio"
                            name='businessname'
                            vale={values.businessname}
                            onChange={handleChange}
                            helperText={errors.businessname && <S.ErrorText>{errors.businessname}</S.ErrorText>}
                        />

                        <TextField 
                            id="filled-multiline-static"
                            className={classes.margin}
                            variant="filled"
                            fullWidth
                            multiline
                            rows={4}
                            label="¿A qué se dedica tu negocio?"
                            placeholder="Ej: Somos una agencia de marketing digital especializada en el sector gastronómico"
                            name='sector'
                            vale={values.sector}
                            onChange={handleChange}
                        />

                        <TextField 
                            id="filled-multiline-static"
                            className={classes.margin}
                            variant="filled"
                            fullWidth
                            multiline
                            rows={4}
                            label="¿Qué te gustaría lograr con la asesoría?"
                            placeholder="Ej: Tener una idea clara de cómo debo gestionar mi presencia digital para aumentar mis ventas"
                            name='meetgoal'
                            vale={values.meetgoal}
                            onChange={handleChange}
                        />

                        <TextField 
                            id="filled-multiline-static"
                            className={classes.margin}
                            variant="filled"
                            fullWidth
                            multiline
                            rows={6}
                            label="Si tu negocio tiene página web y redes sociales, déjanoslas aquí. En caso contrario, escribe N/A."
                            name='businessweb'
                            vale={values.businessweb}
                            onChange={handleChange}
                            helperText={errors.businessweb && <S.ErrorText>{errors.businessweb}</S.ErrorText>}
                        />
                    </div>
                </form>
            
                    <S.SectionText isBigScreen={isBigScreen} isMobile={isMobile}>
                        <b>Selecciona la fecha y hora de tu preferencia.</b>
                        <br/>
                        Podemos contactarte los días lunes, miércoles y viernes entre las <b>18:00 y las 20:00 (hora España).</b> La llamada tendrá una duración de 30 minutos.
                    </S.SectionText>

                <S.DateContainer isMobile={isMobile}>
                    <DateAndTimePicker/>
                </S.DateContainer>

            </S.OnboardingContainer>

                    <S.ButtonContainer isMobile={isMobile}>
                        <Button styleType='callToAction' onClick={handleSubmit}>
                            AGENDAR
                        </Button>
                    </S.ButtonContainer>

        </WindowSection>
    )
}