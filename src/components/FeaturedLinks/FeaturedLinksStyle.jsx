const featuredLinksStyle = theme => ({
  root: {
    background: '#111727',
    paddingLeft: '10%',
    paddingRight: '10%',
    height: '370px',
    [theme.breakpoints.down(680)]: {
      height: 'auto',
      paddingLeft: '2.5%',
      paddingRight: '2.5%'
    }
  },
  image: {
    objectFit: 'cover',
    padding: '0',
    margin: '0',
    height: '100%',
    width: '100%',
    position: 'absolute',
    objectFit: 'cover'
  },
  imageRow: {
    [theme.breakpoints.down(680)]: {
      maxHeight: '225px'
    }
  },
  imageContainer: {
    height: '100%',
    width: '100%'
  },
  link: {
    width: '50%',
    height: '51%',
    color: 'white',
    display: 'inline-block',
    position: 'relative',
    marginTop: '-8px',
    top: '8px'
  },
  row: {
    display: 'inline-block',
    height: '370px',
    width: '50%',
    position: 'relative',
    padding: 0,
    margin: 0,
    overflow: 'hidden',
    [theme.breakpoints.down(680)]: {
      display: 'block',
      width: '100%'
    }
  },
  links: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  linkContent: {
    padding: '2.5%',
    margin: 0,
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    '& h3': {
      fontSize: '1.05em',
      padding: '0',
      margin: '5%'
    },
    '& p': {
      fontSize: '0.65em',
      color: '#777e91',
      lineHeight: '125%'
    },
    '& svg': {
      color: '#32c04a'
    }
  }
});

export default featuredLinksStyle;