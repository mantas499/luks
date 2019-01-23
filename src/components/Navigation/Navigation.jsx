import React from 'react';
import NavigationStyle from './NavigationStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import Exit from '@material-ui/icons/Close';
import Open from '@material-ui/icons/Menu';
import Logo from '../../images/logo-luks1-white.png';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  onMenuOpen() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.menuToggle} onClick={this.onMenuOpen.bind(this)}>
          {this.state.visible ? <Exit style={{ fontSize: '4vw' }}/> : <Open style={{ fontSize: '4vw' }}/>}
        </div>
        <Drawer anchor="left" open={this.state.visible} onClose={this.onMenuOpen.bind(this)}>
          <div className={classes.sidebar}>
            <a href={'/'}>
              <img className={classes.logo} src={Logo} alt={'logo luks sukres'}/>
            </a>
            <ul className={classes.links}>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
        </Drawer>
      </React.Fragment>
    );
  }
}

export default withStyles(NavigationStyle)(Navigation);