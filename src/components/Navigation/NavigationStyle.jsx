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
  menuToggleInner: {
    paddingRight: '16px',
    position: 'fixed',
    zIndex: 100,
    top: '2.5%',
    right: '2.5%',
    cursor: 'pointer',
    color: 'white',
    [theme.breakpoints.up(680)]: {
      display: 'none'
    }
  },
  sidebar: {
    height: '100%',
    width: '200px',
    backgroundColor: '#111727',
    color: 'white',
    opacity: '0.9',
    [theme.breakpoints.down(680)]: {
      width: '100%'
    }
  },
  logo: {
    cursor: 'pointer',
    padding: '7%',
    height: 'auto',
    width: '100%'
  },
  links: {
    listStyleType: 'none',
    fontSize: '1.65em',
    lineHeight: '100%'
  }
});

export default navigationStyle;