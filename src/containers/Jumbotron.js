import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import CSSModules from 'react-css-modules';
import styles from './../../sass/index/jumbotron.scss';
import * as customerActions from './../actions/customer';
import * as dialogActions from './../actions/dialog';
import * as pageActions from './../actions/page';

class Jumbotron extends React.Component {
  componentWillMount() {
    const params = {per_page: 1};
    this.props.dispatch(customerActions.index(params));
  }
  showDialog() {
    this.props.dispatch(dialogActions.show());
  }
  render() {
    return (
      <div styleName='root'>
        <div styleName='slogon'>
          已有<span styleName='total'>{this.props.total}</span>人在宜买车购买到自己心仪的座驾
        </div>
        <FlatButton
          style={
            {
              'marginBottom': '8rem'
            }
          }
          label="开启购车之旅"
          backgroundColor='rgba(0, 0, 0, 0.3)'
          onClick={() => this.showDialog()}
          >
        </FlatButton>
        <IconButton
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '50%'
          }}
          >
          <KeyboardArrowDown />
        </IconButton>
      </div>
    );
  }
}

const CSSJumbotron = CSSModules(Jumbotron, styles);

const mapStateToProps = (state) => {
  const total = state.customerReducer? state.customerReducer.total : 0;
  return {
    total: total
  };
};

const ConnectedJumbotron = connect(mapStateToProps)(CSSJumbotron);

export default ConnectedJumbotron;
