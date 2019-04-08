import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import AboutUsStyle from './AboutUsStyle';
import Image from '../../images/hero.png';

class AboutUs extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.column}>
          <h3 className={classes.title}>Lorem ipsum</h3>
          <p className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.

            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
            fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a
          </p>
        </div>
        <div className={classes.column}>
          <img className={classes.largePlaceHolder} src={Image}/>
        </div>
      </div>
    );
  }
}

export default withStyles(AboutUsStyle)(AboutUs);
