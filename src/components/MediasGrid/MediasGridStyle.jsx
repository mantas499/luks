const mediasGridStyle = theme => ({
  title: {
    margin: 10
  },
  gridList: {
    transform: 'translateZ(0)',
    paddingTop: '2%',
    paddingLeft: '10%',
    paddingRight: '10%'
  },
  separator: {
    height: '10px',
    width: '20%',
    position: 'relative',
    left: '50%',
    margin: 0,
    transform: 'translateX(-50%)'
  },
  line: {
    top: '50%',
    transform: 'translate(-50%, -50%)',
    left: '50%',
    backgroundColor: 'grey',
    height: '15%',
    width: '165%',
    position: 'absolute'
  },
  centerLine: {
    zIndex: 10,
    top: '50%',
    left: '50%',
    width: '50%',
    height: '30%',
    backgroundColor: '#34bf4a',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    verticalAlign: 'middle'
  },
  image: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    objectFit: 'cover'
  }
});

export default mediasGridStyle;