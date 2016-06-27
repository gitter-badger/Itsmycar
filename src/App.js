import React from 'react';
import { connect } from 'react-redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CSSModules from 'react-css-modules';

import NavigationToolBar from './containers/NavigationToolBar';
import CustomerDialog from './containers/CustomerDialog';
import AlertDialog from './containers/AlertDialog';
import * as pageActions from './actions/page';
import * as customerActions from './actions/customer';

const muiTheme = getMuiTheme(darkBaseTheme);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NavigationToolBar />
          <CustomerDialog />
          <AlertDialog />
          { this.props.children }
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
