import React from 'react';
import MediasGridStyle from './MediasGridStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Image1 from '../../images/hero.png';
import Image2 from '../../images/blog-link1.jpg';

const tileData = [{
  img: Image1,
  alt: '',
  cols: 1,
  row: 1
}, {
  img: Image2,
  alt: '',
  cols: 2,
  row: 1
}, {
  img: Image1,
  alt: '',
  cols: 2,
  row: 1
}, {
  img: Image2,
  alt: '',
  cols: 1,
  row: 1
}, {
  img: Image1,
  alt: '',
  cols: 1,
  row: 1
}, {
  img: Image2,
  alt: '',
  cols: 2,
  row: 1
}];

class MediasGrid extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <h3 align="center" className={classes.title}>
          Gallery
        </h3>
        <div className={classes.separator}>
          <div className={classes.line}></div>
          <div className={classes.centerLine}></div>
        </div>
        <div className={classes.root}>
          <GridList cellHeight={200} spacing={16} cols={3} className={classes.gridList}>
            {tileData.map(tile => (
              <GridListTile key={tile.img} cols={tile.cols} rows={tile.rows}>
                <img className={classes.image} src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(MediasGridStyle)(MediasGrid);