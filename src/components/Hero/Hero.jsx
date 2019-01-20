import React from 'react';
import HeroStyle from './HeroStyle';
import Carousel from '../Carousel/Carousel';
import Fade from '@material-ui/core/Fade';
import withStyles from '@material-ui/core/styles/withStyles';
import image from '../../images/hero.png';

const items = [{
  url: image,
  altText: ''
}, {
  url: image,
  altText: ''
}]

class Hero extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Fade in={true} timeout={1650}>
          <Carousel items={items}></Carousel>
        </Fade>
        <div className={classes.content}>

        </div>
      </div>
    );
  }
}

export default withStyles(HeroStyle)(Hero);