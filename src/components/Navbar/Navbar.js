import { Button, Box } from "@mui/material";
import arrowDown from '../../assets/img/chevron-down.svg'

const pages = [
  {title: 'Demos', arrow: true},
  {title: 'Services', arrow: true},
  {title: 'Pages', arrow: true},
  {title: 'Portfolio', arrow: true},
  {title: 'Blog', arrow: true},
  {title: 'Contact', arrow: false},
];

const styles = {
  btnLink:{
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '22px',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#000000',
    display: 'flex',
    padding: '0',
    margin: '0 44px 10px 0'
  }
}

const Navbar = () => {
  return (
    <Box sx={{ flexGrow:1 , display:{ lg:'flex' }, justifyContent:'flex-end' }}>
      {
        pages.map((page, index) => (
          <Button key={index} sx={styles.btnLink}>
            {page.title}
            {page.arrow && (<img src={arrowDown} style={{ marginLeft:'5px' }} alt="flecha"/> )}
          </Button>
        ))
      }
    </Box>
  )
}

export default Navbar