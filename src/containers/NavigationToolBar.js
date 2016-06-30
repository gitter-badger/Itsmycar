import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import * as customerDialog from './../actions/customer_dialog';

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
    cursor: 'pointer',
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
  showDialog(car_name) {
    this.props.dispatch(customerDialog.show(car_name));
  }
  goIndex() {
    this.props.dispatch(push({
      pathname: '/'
    }));
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
            src='/src/images/logo.png'
            style={styles.logoStyle}
            onTouchTap={() => this.goIndex()}
          />
        </ToolbarGroup>
        <ToolbarGroup
          style={styles.groupStyle}
          >
          <img
            src='/src/images/telephone.png'
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
  const open = state.customerDialogReducer.open;
  return {
    open: open
  };
};

const ConnectedNavigationToolBar = connect(mapStateToProps)(NavigationToolBar);

export default ConnectedNavigationToolBar;
