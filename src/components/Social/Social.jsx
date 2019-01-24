import React from 'react';
import SocialStyle from './SocialStyle';
import withStyles from '@material-ui/core/styles/withStyles';

class Social extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>

      </div>
    )
  }
};

export default withStyles(SocialStyle)(Social);
