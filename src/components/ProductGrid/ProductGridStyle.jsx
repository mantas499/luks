const style = theme => ({
  item: {
    height: '50%',
    padding: '2.5% 27.5% 2.5% 27.5%',
    [theme.breakpoints.down(680)]: {
      padding: '2.5% 10% 2.5% 10%'
    },
    margin: '10% auto',
    '& > img': {
      objectFit: 'cover',
      display: 'block',
      height: '95%',
      width: '95%',
      margin: '2.5 auto',
    },
    '& > h3': {
      fontSize: '1.5rem'
    }
  }
});

export default style;