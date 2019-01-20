const carouselStyle = theme => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  pagination: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.35)',
    height: '8%',
    width: '6.5%',
    bottom: 75,
    left: 25,
    "&:hover": {
      backgroundColor: 'rgba(0,0,0,0.50)'
    }
  },
  icon: {
    color: 'white'
  },
  image: {
    objectFit: 'cover',
    filter: 'brightness(63%)'
  }
});

export default carouselStyle;