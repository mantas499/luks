const heroStyle = theme => ({
  root: {
    width: '100%',
    maxHeight: 900,
    padding: 0,
    marginTop: '100px'
  },
  logo: {
    marginTop: '100px',
    cursor: 'pointer',
    position: 'absolute',
    top: 10,
    filter: 'brightness(92.5%)',
    left: 10,
    maxHeight: '95px',
    width: 'auto',
    zIndex: '100',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '65px'
    },
  }
});

export default heroStyle;