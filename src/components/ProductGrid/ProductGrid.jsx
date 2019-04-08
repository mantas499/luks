import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ProductGridStyle from './ProductGridStyle';
import Grid from '@material-ui/core/Grid/Grid';
import Image1 from '../../images/image.jpg';
import Typography from '@material-ui/core/Typography/Typography';

const products = [{
  img: Image1
}, {
  img: Image1
}, {
  img: Image1
}, {
  img: Image1
}, {
  img: Image1
}, {
  img: Image1
}];

class ProductGrid extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          {products.map((product, index) => {
            return (
              <div key={index} className={classes.item}>
                <img key={index} src={product.img}/>
                <Typography variant={'h3'} align={'center'}>Pavadinimas</Typography>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(ProductGridStyle)(ProductGrid);