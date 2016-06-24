import React from 'react';
import { connect } from 'react-redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MCToolBar from './components/MCToolBar';
import MCJumbotron from './components/MCJumbotron';
import MCDialog from './components/MCDialog';
import * as page from './../actions/page';

const muiTheme = getMuiTheme(darkBaseTheme);

class App extends React.Component {
  constructor() {
    super();
    this.isWheel = true;
  }
  handleWheel(e) {
    if (e.deltaY > 0) {
      if (this.isWheel) {
        this.isWheel = false;
        this.props.dispatch(page.pageDown());
        setTimeout(() => { this.isWheel = true; }, 500);
      }
    }
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div onWheel={(e) => this.handleWheel(e)}>
          <MCToolBar />
          <MCJumbotron count={10} />
          <MCDialog />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
