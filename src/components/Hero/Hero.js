import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import photo_banner from '../../assets/img/photo_banner.png'
import CTAButton from '../Button'
import styles from './styles'

const Hero = () => {
  return (
    <Box sx={styles.hero}>
      <Box sx={styles.wrapper}>
        <Box sx={{textAlign:'left'}}>
          <Typography variant='h2'>
            Psicóloga Andrea: Comprensión y Cuidado para tu Bienestar Emocional
          </Typography>
          <Typography variant='body1' sx={styles.content}>
            Bienvenidos a mi página web:  <br/>
            Con una amplia experiencia en el campo de la psicología, ofrecemos comprensión y soluciones personalizadas para tus desafíos emocionales. <br/> 
            Agenda tu cita hoy y comienza tu camino hacia la sanación y el crecimiento personal.
          </Typography>
          <CTAButton  CTAtext={'Agenda Ya!'}/>
        </Box>
        <Box component='img' src={photo_banner} sx={styles.photo} />
      </Box>
    </Box>
  )
}

export default Hero