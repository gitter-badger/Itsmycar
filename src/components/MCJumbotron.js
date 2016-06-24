import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import CSSModules from 'react-css-modules';
import styles from './../../sass/mc-jumbotron.scss';
import * as dialog from './../../actions/dialog';

class MCJumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.top = props.top;
  }
  showDialog() {
    this.props.dispatch(dialog.show());
  }
  render() {
    this.top = this.top - 100;
    const style = {
      top: this.top
    };
    return (
      <div styleName='root'
        style={style}>
        <div styleName='slogon'>
          已有<span styleName='count'>{this.props.count}</span>人在宜买车购买到自己心仪的座驾
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
            'backgroundColor': 'rgba(0, 0, 0, 0.3)',
            'border-radius': '50%'
          }}
          >
          <KeyboardArrowDown />
        </IconButton>
      </div>
    );
  }
}

const CSSMCJumbotron = CSSModules(MCJumbotron, styles);

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const ConnectedMCJumbotron = connect(mapStateToProps)(CSSMCJumbotron);

export default ConnectedMCJumbotron;
