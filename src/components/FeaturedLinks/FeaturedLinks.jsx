import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Image from '../../images/hero.png';
import FeaturedLinksStyle from './FeaturedLinksStyle';
import LocalShipping from '@material-ui/icons/LocalShipping';
import MyLocation from '@material-ui/icons/MyLocation';
import Money from '@material-ui/icons/Money';
import Blog from '@material-ui/icons/CollectionsBookmark';

class FeaturedLinks extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.row}>
          <img src={Image} className={classes.image}/>
        </div>
        <div className={classes.row}>
          <div className={classes.links}>
            <div className={classes.link} style={{ backgroundColor: '#192032' }}>
              <div className={classes.linkContent}>
                <LocalShipping/>
                <h3>
                  Lorem ipsum
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </p>
              </div>
            </div>
            <div className={classes.link} style={{ backgroundColor: '#1c2437' }}>
              <div className={classes.linkContent}>
                <Blog/>
                <h3>
                  Lorem ipsum
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </p>
              </div>
            </div>
            <div className={classes.link} style={{ backgroundColor: '#1c2437' }}>
              <div className={classes.linkContent}>
                <Money/>
                <h3>
                  Lorem ipsum
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </p>
              </div>
            </div>
            <div className={classes.link} style={{ backgroundColor: '#192032' }}>
              <div className={classes.linkContent}>
                <MyLocation/>
                <h3>
                  Lorem ipsum
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(FeaturedLinksStyle)(FeaturedLinks);

/*
<div className={classes.links}>
          <div className={classes.link} style={{ backgroundColor: '#192032' }}>
            <div className={classes.linkContent}>
              <LocalShipping/>
              <h3>
                Lorem ipsum
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </p>
            </div>
          </div>
          <div className={classes.link} style={{ backgroundColor: '#1c2437' }}>
            <div className={classes.linkContent}>
              <Blog/>
              <h3>
                Lorem ipsum
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </p>
            </div>
          </div>
          <div className={classes.link} style={{ backgroundColor: '#1c2437' }}>
            <div className={classes.linkContent}>
              <Money/>
              <h3>
                Lorem ipsum
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </p>
            </div>
          </div>
          <div className={classes.link} style={{ backgroundColor: '#192032' }}>
            <div className={classes.linkContent}>
              <MyLocation/>
              <h3>
                Lorem ipsum
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </p>
            </div>
          </div>
        </div>


 */