const styles = {
  hero: (theme) => ({
    padding: '20px',
    [theme.breakpoints.up('lg')]:{
      display: 'flex',
      justifyContent: 'center',
      padding: '44px 20px 20px',
    },
  }),
  wrapper:(theme) => ({
    padding: '20px',
    [theme.breakpoints.up('md')]:{
      maxWidht: '1240px',
      display: 'flex',
      alignItems: 'center',
      gap: '35px'
    },
  }),
  photo:{
    width: '100%',
    maxWidth: '509px',
    display: 'block',
    margin: '44px auto 0'
  },
  content:(theme) => ({
    margin: '2rem 0 4rem 0',
  })
}

export default styles