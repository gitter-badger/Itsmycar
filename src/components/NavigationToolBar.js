import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import * as dialog from './../actions/dialog';

const styles = {
  rootStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    width: '100%',
    zIndex: 1,
    justifyContent: 'space-between'
  },
  groupStyle: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonStyle: {
    margin: 0,
    marginLeft: 10
  },
  logoStyle: {
    width: '50%'
  },
  iconStyle: {
    width: '10%',
    height: '10%'
  },
  buttonLabelStyle: {
    color: 'white'
  }
};

class NavigationToolBar extends React.Component {
  constructor(props) {
    super(props);
  }
  showDialog() {
    this.props.dispatch(dialog.show());
  }
  render() {
    return (
      <Toolbar
        style={styles.rootStyle}
      >
        <ToolbarGroup
          style={styles.groupStyle}
          >
          <img
            src='/img/logo.png'
            style={styles.logoStyle}
          />
        </ToolbarGroup>
        <ToolbarGroup
          style={styles.groupStyle}
          >
          <img
            src='/img/telephone.png'
            style={styles.iconStyle}
          />
          <FlatButton
            label="电话咨询"
            labelStyle={styles.buttonLabelStyle}
            primary={true}
            style={styles.buttonStyle}
            onTouchTap={()=>this.showDialog()}
            />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.dialogReducer.open
  };
};

const ConnectedNavigationToolBar = connect(mapStateToProps)(NavigationToolBar);

export default ConnectedNavigationToolBar;
