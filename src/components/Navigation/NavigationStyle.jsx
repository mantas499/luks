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
    width: '200px',
    backgroundColor: '#111727',
    color: 'white',
    opacity: '0.9'
  },
  logo: {
    cursor: 'pointer',
    padding: '7%',
    height: 'auto',
    width: '100%'
  },
  links: {
    listStyleType: 'none',
    fontSize: '2em',
    lineHeight: '100%'
  }
});

export default navigationStyle;