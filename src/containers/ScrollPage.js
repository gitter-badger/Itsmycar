import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CSSModules from 'react-css-modules';

import NavigationToolBar from './../containers/NavigationToolBar';
import Jumbotron from './Jumbotron';
import SearchPanel from './SearchPanel';
import * as pageActions from './../actions/page';
import * as customerActions from './../actions/customer';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import pageUpTransition from './../styles/page_up_transition.scss';
import pageDownTransition from './../styles/page_down_transition.scss';

class ScrollPage extends React.Component {
  jumbotron() {
    return (
      <Jumbotron />
    );
  }
  searchPanel() {
    return (
      <SearchPanel />
    );
  }
  handleWheel(e) {
    const index = this.props.index? this.props.index: 0;
    if (e.deltaY > 1) {
      if (this.isWheel) {
        this.isWheel = false;
        this.props.dispatch(pageActions.pageDown(index, this.pages.length));
        setTimeout(() => { this.isWheel = true; }, 600);
      }
    }
    if (e.deltaY < -1) {
      if (this.isWheel) {
        this.isWheel = false;
        this.props.dispatch(pageActions.pageUp(index, this.pages.length));
        setTimeout(() => { this.isWheel = true; }, 600);
      }
    }
  }
  constructor(props) {
    super(props);
    this.isWheel = true;
    this.pages = [this.jumbotron(), this.searchPanel()];
    this.transitions = {
      up: pageUpTransition,
      down: pageDownTransition
    };
  }
  render() {
    const index = this.props.index? this.props.index: 0;
    const direction = this.props.direction? this.props.direction: 'down';
    return (
      <div
        onWheel={(e)=>this.handleWheel(e)}>
        <ReactCSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionName={this.transitions[direction]}
          >
          { React.cloneElement(this.pages[index], { key: index }) }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    index: state.pageReducer.index,
    direction: state.pageReducer.direction
  };
};

const ConnectedScrollPage = connect(mapStateToProps)(ScrollPage);

export default ConnectedScrollPage;
