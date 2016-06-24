import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import CSSModules from 'react-css-modules';
import styles from './../../sass/mc-dialog.scss';
import * as dialog from './../../actions/dialog';
import TextField from 'material-ui/TextField';
import {green500, blue500} from 'material-ui/styles/colors';

const inputStyles = {
  errorStyle: {
    color: blue500,
  }
};

class MCDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOpen () {
    this.props.dispatch(dialog.show());
  };

  handleClose () {
    this.props.dispatch(dialog.dismiss());
  };

  render() {
    const actions = [
      <FlatButton
        label="取消"
        primary={true}
        onTouchTap={() => this.handleClose()}
      />,
      <FlatButton
        label="提交"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this.handleClose()}
      />,
    ];

    return (
      <div>
        <Dialog
          title="请填写您的购车意向"
          actions={actions}
          modal={true}
          open={this.props.open}
        >
        <TextField
          style={{
            width: '100%'
          }}
          hintText="心仪车型"
          floatingLabelText="请填写您中意的车型名称"
          errorStyle={inputStyles.errorStyle}
          />
        <br />
        <TextField
          style={{
            width: '100%'
          }}
          hintText="姓名"
          floatingLabelText="请留下您的尊姓大名"
          errorStyle={inputStyles.errorStyle}
          />
        <br />
        <TextField
          style={{
            width: '100%'
          }}
          type="telephone"
          hintText="手机号码"
          floatingLabelText="请填写您的手机号码"
          errorStyle={inputStyles.errorStyle}
          />
        <br />
        </Dialog>
      </div>
    );
  }
}

const CSSMCDialog = CSSModules(MCDialog, styles);

const mapStateToProps = (state) => {
  return {
    open: state.dialogReducer.open
  };
};

const ConnectedMCDialog = connect(mapStateToProps)(CSSMCDialog);

export default ConnectedMCDialog;
