import { createTheme } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

const theme = createTheme({
  palette:{
    primary:{
      main: '#e4c5c4'
    },
    slateBlue:{
      main: '#c8ad8d'
    }
  },
  typography:{
    h2:{
      fontFamily: 'Montserrat',
      fontWeight: '700',
      fontSize: '32px',
      lineHeight: '39px',
      color: '#000000',
      [breakpoints.up('md')]:{
        fontSize: '64px',
        lineHeight: '78px',
      }
    },
    body1:{
      fontFamily: 'Montserrat',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '17px',
      color: '#686868',
      [breakpoints.up('md')]:{
        fontSize: '24px',
        lineHeight: '29px',
        fontWeight: '500',
      }
    },
  }
})

export default theme