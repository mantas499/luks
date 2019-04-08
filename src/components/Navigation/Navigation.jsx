import React from 'react';
import NavigationStyle from './NavigationStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import {Link} from 'gatsby';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      scroll: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleSroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleSroll);
  }

  handleSroll() {
    this.setState({
      scroll: window.scrollY
    });
  }

  onMenuOpen() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar style={{height: 100}}>
          <Typography variant={'h1'} className={classes.title}>Luks</Typography>
          <div className={classes.nav}>
            <Link to={'/'}>Pradžia</Link>
            <Link to={'/produktai'}>Produktai</Link>
            <Link to={'/kontaktai'}>Kontaktai</Link>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(NavigationStyle)(Navigation);