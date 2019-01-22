const carouselStyle = theme => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: 0
  },
  pagination: {
    display: 'inline-block',
    position: 'absolute',
    width: '100%',
    bottom: 50,
    left: 15
  },
  button: {
    marginLeft: '1%',
    backgroundColor: 'rgba(0,0,0,0.35)',
    "&:hover": {
      backgroundColor: 'rgba(0,0,0,0.50)'
    }
  },
  icon: {
    color: 'white'
  },
  image: {
    objectFit: 'cover',
    filter: 'brightness(63%)',
    maxHeight: '660px',
    width: '100%'
  }
});

export default carouselStyle;