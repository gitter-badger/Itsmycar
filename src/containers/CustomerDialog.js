import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { green500, blue500 } from 'material-ui/styles/colors';
import CSSModules from 'react-css-modules';
import styles from './../../sass/index/customer_dialog.scss';
import * as dialogActions from './../actions/dialog';
import * as customerActions from './../actions/customer';

const inputStyles = {
  errorStyle: {
    color: blue500,
  }
};

class CustomerDialog extends React.Component {

  handleOpen() {
    this.props.dispatch(dialogActions.show());
  };

  handleClose() {
    this.props.dispatch(dialogActions.dismiss());
  };

  handleSubmit() {
    const name = this.refs.name.getValue();
    const telephone = this.refs.telephone.getValue();
    const car_name = this.refs.car_name.getValue();
    const customer = {
      name: name,
      telephone: telephone,
      intented_cars_attributes: {
        name: car_name
      }
    };
    this.props.dispatch(customerActions.create(customer));
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
        onTouchTap={() => this.handleSubmit()}
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
            fullWidth={true}
            ref="car_name"
            hintText="心仪车型"
            floatingLabelText="请填写您中意的车型名称"
            errorStyle={inputStyles.errorStyle}
            />
          <br />
          <TextField
            fullWidth={true}
            ref="name"
            hintText="姓名"
            floatingLabelText="请留下您的尊姓大名"
            errorStyle={inputStyles.errorStyle}
            />
          <br />
          <TextField
            fullWidth={true}
            ref="telephone"
            type="tel"
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

const CSSCustomerDialog = CSSModules(CustomerDialog, styles);

const mapStateToProps = (state) => {
  return {
    open: state.dialogReducer.open
  };
};

const ConnectedCustomerDialog = connect(mapStateToProps)(CSSCustomerDialog);

export default ConnectedCustomerDialog;
