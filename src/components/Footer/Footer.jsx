import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import FooterStyle from './FooterStyle';
import Typography from '@material-ui/core/Typography/Typography';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.root}>
        <div className={classes.row}>
          <Typography variant={'h3'}>Apie mus</Typography>
          <br/>
          <Typography variant={'body1'} className={classes.aboutUs}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem.
          </Typography>
        </div>
        <div className={classes.row}>
        </div>
        <div className={classes.row}>
          <Typography variant={'h3'}>Kontaktai</Typography>
          <br/>
          <div className={classes.contactInfo}>
            <Phone/>
            <Typography variant={'body1'}>Tel. numeris:</Typography>
            <Typography variant={'body2'} style={{color: '#34bf4a'}}><b>+370 60000000</b></Typography>
          </div>
          <br/>
          <div className={classes.contactInfo}>
            <Email/>
            <Typography variant={'body1'}>El. paštas:</Typography>
            <Typography variant={'body2'} style={{color: '#34bf4a'}}><b>luks@luks.lt</b></Typography>
          </div>
        </div>
      </footer>
    );
  }
}

export default withStyles(FooterStyle)(Footer);