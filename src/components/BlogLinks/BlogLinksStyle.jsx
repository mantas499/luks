const blogLinksStyle = theme => ({
  root: {
    position: 'relative',
    height: '550px',
    [theme.breakpoints.down(680)]: {
      height: 'auto'
    },
    paddingBottom: '25px'
  },
  row: {
    marginTop: '-9px',
    top: '9px',
    height: '50%',
    width: '50%',
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down(680)]: {
      display: 'block',
      width: '100%',
      height: '300px'
    }
  },
  image: {
    position: 'absolute',
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    [theme.breakpoints.down(680)]: {
      position: 'relative',
      maxHeight: '300px'
    }
  },
  button: {
    color: 'white',
    backgroundColor: '#34bf4a',
    fontSize: '0.9em',
    "&:hover": {
      backgroundColor: '#289c39'
    },
    boxShadow: 'none'
  },
  rowContent: {
    padding: '3.5%',
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
      margin: '5%',
      marginLeft: '0',
      color: 'white'
    },
    '& p': {
      fontSize: '0.80em',
      color: '#777e91',
      lineHeight: '125%',
      textAlign: 'left center',
      marginLeft: 0
    }
  }
});

export default blogLinksStyle;