import Box from '@mui/material/Box';
import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import arrowRight from '../../assets/img/arrow-right.svg';
import strategy from '../../assets/img/strategy.svg';
import styles from './styles';

const CardPsic = () => {
  return (
    <MuiCard sx={styles.card}>
      <CardContent sx={{padding:0}}>
        <Box component='img' src={strategy} />
        <Typography variant="h3" sx={styles.title}>Alcanza tus objetivos</Typography>
        <List>
          <ListItem sx={styles.listItem}>
            <Box component='img' src={arrowRight} sx={{marginRight:'3px'}}/>
            <Typography>Orientación personalizada</Typography>
          </ListItem>
          <ListItem sx={styles.listItem}>
            <Box component='img' src={arrowRight} sx={{marginRight:'3px'}}/>
            <Typography>Estrategias</Typography>
          </ListItem>
          <ListItem sx={styles.listItem}>
            <Box component='img' src={arrowRight} sx={{marginRight:'3px'}}/>
            <Typography>Definiciones</Typography>
          </ListItem>
        </List>
      </CardContent>
      <CardActions sx={{padding: 0}}>
        <Button>
          Saber más
          <Box component='img' src={arrowRight} />
        </Button>
      </CardActions>
    </MuiCard>
  )
}

export default CardPsic