const styles = {
  appBar: (theme) => ({
    background: '#FFF',
    boxShadow: 'none',
    [theme.breakpoints.up('lg')]:{
      borderBottom: '0.5px solid #c8ad8d',
      padding: '20px 0',
      margin: 'auto',
      maxWidth: '1240px',
    },
  }),
  container: (theme) => ({
    [theme.breakpoints.up('lg')]:{
      padding: 0,
      margin: 0,
    },
  }),
  logoDesk:{
    mr: 2,
    display:{ xs:'none', lg:'flex' }
  },
  logoMob:{
    mr: 2,
    display:{ xs:'flex', lg:'none' }
  }
}

export default styles