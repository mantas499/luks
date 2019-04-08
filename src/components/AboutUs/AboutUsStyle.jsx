const aboutUsStyle = theme => ({
  root: {
    width: '85%',
    height: '450px',
    margin: '0 auto',
    padding: '2.5%',
    [theme.breakpoints.down(800)]: {
      height: 'auto'
    }
  },
  column: {
    position: 'relative',
    display: 'table-cell',
    verticalAlign: 'middle',
    width: '50%',
    height: '100%',
    [theme.breakpoints.down(800)]: {
      display: 'block',
      width: '100%',
      padding: 0
    }
  },
  title: {
    textAlign: 'justify',
    paddingLeft: '5%'
  },
  paragraph: {
    textAlign: 'justify',
    padding: '5%',
    [theme.breakpoints.down(800)]: {
      paddingBottom: 0
    }
  },
  largePlaceHolder: {
    top: '20%',
    left: '15%',
    position: 'absolute',
    height: '250px',
    width: '400px',
    objectFit: 'cover',
    [theme.breakpoints.down(1200)]: {
      position: 'relative',
      top: 0,
      left: '10%',
      margin: '0 auto',
      height: '50%',
      maxHeight: '350px',
      width: '100%',
      padding: '7%',
      paddingTop: '0'
    },
    [theme.breakpoints.down(800)]: {
      width: '100%',
      position: 'relative',
      top: '5%',
      left: 0,
      margin: '0 auto',
      padding: '5%'
    }
  },
  smallPlaceHolder: {
    top: '5%',
    left: '77.5%',
    position: 'absolute',
    height: '135px',
    width: '195px',
    objectFit: 'cover',
    [theme.breakpoints.down(1200)]: {
      display: 'none'
    }
  }
});

export default aboutUsStyle;