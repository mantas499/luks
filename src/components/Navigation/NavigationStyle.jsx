const navigationStyle = theme => ({
  menuToggle: {
    paddingRight: '16px',
    position: 'fixed',
    zIndex: 100,
    top: '5%',
    right: '3.5%',
    cursor: 'pointer',
    color: 'white'
  },
  sidebar: {
    height: '100%',
    width: '100%',
    backgroundColor: '#111727',
    color: 'white'
  },
  logo: {
    cursor: 'pointer',
    padding: '7%',
    maxHeight: '150px',
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '65px'
    },
  },
  links: {
    listStyleType: 'none',
    fontSize: '2em',
    lineHeight: '100%'
  }
});

export default navigationStyle;