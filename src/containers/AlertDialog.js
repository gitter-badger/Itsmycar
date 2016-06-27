import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { green500, blue500 } from 'material-ui/styles/colors';
import CSSModules from 'react-css-modules';
import styles from './../styles/customer_dialog.scss';
import * as alertActions from './../actions/alert';
import * as dialogActions from './../actions/dialog';
import * as customerActions from './../actions/customer';

const inputStyles = {
  errorStyle: {
    color: blue500,
  }
};

class AlertDialog extends React.Component {

  handleOpen() {
    this.props.dispatch(alertActions.show());
  };

  handleClose() {
    this.props.dispatch(alertActions.dismiss());
    const params = {per_page: 1};
    this.props.dispatch(customerActions.index(params));
  };

  render() {
    const actions = [
      <FlatButton
        label="确定"
        primary={true}
        onTouchTap={() => this.handleClose()}
      />,
    ];
    return (
      <div>
        <Dialog
          title={this.props.title}
          actions={actions}
          modal={true}
          open={this.props.open}
        >
          {this.props.content}
        </Dialog>
      </div>
    );
  }
}

const CSSAlertDialog = CSSModules(AlertDialog, styles);

const mapStateToProps = (state) => {
  const title = state.alertReducer.title;
  const content = state.alertReducer.content;
  const open = state.alertReducer.open;
  return {
    title: title,
    content: content,
    open: open
  };
};

const ConnectedAlertDialog = connect(mapStateToProps)(CSSAlertDialog);

export default ConnectedAlertDialog;
