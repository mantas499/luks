const style = theme => ({
  root: {
    background: '#111727',
    padding: '5%'
  },
  row: {
    width: 'calc(100% / 3)',
    display: 'inline-grid',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    '& > h3': {
      color: 'white',
      fontSize: '1.25rem'
    },
    '& > p': {
      color: 'white'
    }
  },
  contactInfo: {
    padding: '0 15px 15px 15px',
    width: '350px',
    color: 'white',
    background: '#0b1020',
    '& svg': {
      verticalAlign: 'middle',
    },
    '& > *': {
      color: 'white'
    },
    '& > p': {
      width: 'fit-content',
      display: 'inline-grid',
      padding: '12.5px'
    }
  },
  aboutUs: {
    textAlign: 'justify',
    padding: '0 15px 15px 15px'
  }
});

export default style;