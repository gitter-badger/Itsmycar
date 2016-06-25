import React from 'react';
import { connect } from 'react-redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavigationToolBar from './../components/NavigationToolBar';
import CustomerDialog from './CustomerDialog';
import Jumbotron from './Jumbotron';
import * as pageActions from './../actions/page';
import * as customerActions from './../actions/customer';

const muiTheme = getMuiTheme(darkBaseTheme);

class Index extends React.Component {
  constructor() {
    super();
    this.isWheel = true;
  }
  handleWheel(e) {
    if (e.deltaY > 0) {
      if (this.isWheel) {
        this.isWheel = false;
        this.props.dispatch(pageActions.pageDown());
        setTimeout(() => { this.isWheel = true; }, 500);
      }
    }
  }
  render() {
    const children = this.props.children ? this.props.children : <Jumbotron />;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div onWheel={(e) => this.handleWheel(e)}>
          <NavigationToolBar />
          <CustomerDialog />
          { children }
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

const ConnectedIndex = connect(mapStateToProps)(Index);

export default ConnectedIndex;
