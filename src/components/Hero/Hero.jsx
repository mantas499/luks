import React from 'react';
import HeroStyle from './HeroStyle';
import Carousel from '../Carousel/Carousel';
import Fade from '@material-ui/core/Fade';
import withStyles from '@material-ui/core/styles/withStyles';
import image from '../../images/hero.png';
import logo from '../../images/logo-luks1-white.png';

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
        <a href={'/'}>
          <img className={classes.logo} src={logo} alt={'logo'} />
        </a>
        <Fade in={true} timeout={1650}>
          <Carousel items={items}></Carousel>
        </Fade>
        <div className={classes.content}>
          TEST
        </div>
      </div>
    );
  }
}

export default withStyles(HeroStyle)(Hero);