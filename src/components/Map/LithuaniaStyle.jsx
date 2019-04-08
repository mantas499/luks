const style = theme => ({
  root: {
    '& path': {
      fill: '#111727 !important',
      cursor: 'pointer'
    },
    '& path:hover': {
      fill: 'rgb(52, 191, 74) !important'
    }
  },
  item: {
    margin: '5%',
    padding: '5%'
  },
  active: {
    background: 'rgb(52, 191, 74)',
    color: 'white'
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  }
});

export default style;