import { Box } from "@mui/material"
import MuiDrawer from "@mui/material/Drawer"
import { IconButton } from "@mui/material"
import Navbar from '../Navbar'
import close from '../../assets/img/close.svg'

const Drawer = ({open, onClose}) => {
  return (
    <MuiDrawer 
      PaperProps={{
        sx:{width:'100%'}
      }}
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Box sx={{ padding: '2px' }}>
        <IconButton onClick={onClose} sx={{ padding:0, marginLeft:'5px'}}>
          <img src={close} alt="cerrar"/>
        </IconButton>
        <Box sx={{ padding: '44px' }}>
          <Navbar />
        </Box>
      </Box>
    </MuiDrawer>
  )
}

export default Drawer