import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import MenuListComposition from '../MenuList/MenuList';


const styles = {
  root: {
    flexGrow: 1,
    position: 'relative',
    zIndex: 1000,
    background: 'red'
  },
  flex: {
    flex: 1,
    color: 'white'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="cinnabar">
        <Toolbar>
          {/* <MenuListComposition /> */}
          <Typography variant="title" className={classes.flex} style={{color: 'black'}}>
          Minneapolis Institute of Art
         </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);