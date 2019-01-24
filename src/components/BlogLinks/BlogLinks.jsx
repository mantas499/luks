import React from 'react';
import BlogLinkStyle from './BlogLinksStyle';
import withStyles from '@material-ui/core/es/styles/withStyles';
import Image1 from '../../images/blog-link1.jpg';
import Image2 from '../../images/blog-link2.jpg';
import Fab from '@material-ui/core/Fab';

class BlogLinks extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.row}>
          <img className={classes.image} src={Image1}/>
        </div>
        <div style={{ backgroundColor: 'rgb(28, 36, 55)', padding: '5%' }} className={classes.row}>
          <div className={classes.rowContent}>
            <h3 align="left">
              Lorem ipsum
            </h3>
            <p align="left">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <div align="left">
              <Fab
                variant="extended"
                size="small"
                aria-label="Add"
                className={classes.button}
              >
                Find out more
              </Fab>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: 'rgb(28, 36, 55)', padding: '5%' }} className={classes.row}>
          <div className={classes.rowContent}>
            <h3 align="left">
              Lorem ipsum
            </h3>
            <p align="left">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <div align="left">
              <Fab
                variant="extended"
                size="small"
                aria-label="Add"
                className={classes.button}
              >
                Find out more
              </Fab>
            </div>
          </div>
        </div>
        <div className={classes.row}>
          <img src={Image2} className={classes.image}/>
        </div>
      </div>
    );
  }
}

export default withStyles(BlogLinkStyle)(BlogLinks);