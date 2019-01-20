import React from 'react';
import Slider from 'react-slick';
import CarouselStyle from './CarouselStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Back from '@material-ui/icons/ChevronLeft';
import Next from '@material-ui/icons/ChevronRight';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.state = {
      currentSlide: 0
    }
  }

  onClickNext() {
    this.carouselRef.current.slickNext();
  }

  onClickBack() {
    this.carouselRef.current.slickPrev();
  }


  render() {
    const { classes, items } = this.props;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true,
      slidesToScroll: 1
    };

    return (
      <div className={classes.root}>
        <Slider {...settings} className={classes.slider} ref={this.carouselRef}>
          {items.map((item, index) => {
            return (
              <div key={index}>
                <img className={classes.image} src={item.url} alt={item.altText} />
              </div>
            )
          })}
        </Slider>
        <Button className={classes.pagination} onClick={this.onClickBack.bind(this)}>
          <Back className={classes.icon} />
        </Button>
        <Button style={{left: '10.5%'}} className={classes.pagination} onClick={this.onClickNext.bind(this)}>
          <Next className={classes.icon} />
        </Button>
      </div>
    );
  }
}

export default withStyles(CarouselStyle)(Carousel);