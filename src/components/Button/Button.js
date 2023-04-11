import { Button } from "@mui/material";
import theme from "../../theme";

const styles = {
  btn:(theme) => ({
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'capitalize',
    color:' #FFFFFF',
    padding: '20px 16px',
    borderRadius:'8px',
    background: theme.palette.slateBlue.main,
    '&:hover':{
      background: '#6f7357'
    }
  })
}

console.log(theme)

const CTAButton = ({CTAtext}) => {
  return (
    <>
      <Button sx={styles.btn}>{CTAtext}</Button>
    </>
  );
}

export default CTAButton;