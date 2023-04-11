import Box from '@mui/material/Box';
import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import arrowRight from '../../assets/img/arrow-right.svg';
import strategy from '../../assets/img/strategy.svg';

const Card = () => {
  return (
    <MuiCard>
      <CardContent sx={{padding:0}}>
        <Box component='img' src={strategy} />
      </CardContent>
    </MuiCard>
  )
}

export default Card