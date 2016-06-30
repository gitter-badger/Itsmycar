import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { green500, blue500 } from 'material-ui/styles/colors';
import CSSModules from 'react-css-modules';
import * as brandSearchDialogActions from './../actions/brand_search_dialog';
import * as brandActions from './../actions/brand';

const inputStyles = {
  errorStyle: {
    color: blue500,
  }
};

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  gridList: {
    width: 400,
    height: 400,
    width: '100%',
    overflowY: 'auto',
    marginBottom: 24,
  },
};

class BrandSearchDialog extends React.Component {

  handleOpen() {
  };

  handleClose() {
    this.props.dispatch(brandSearchDialogActions.dismiss());
  };

  handleSubmit() {
  };

  handleTextChange() {
    const model_name = this.refs.model_name.getValue();
    const params = {
      'q[name_cont]': model_name
    };
    this.props.dispatch(brandActions.index(params));
  };

  render() {
    const actions = [
      <FlatButton
        label="取消"
        primary={true}
        onTouchTap={() => this.handleClose()}
      />,
      <FlatButton
        label="确定"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this.handleSubmit()}
      />,
    ];
    const brands = this.props.brands? this.props.brands: [];
    const open = this.props.open? this.props.open: false;
    return (
      <div>
        <Dialog
          actions={actions}
          modal={true}
          open={open}
        >
          <TextField
            fullWidth={true}
            ref="model_name"
            hintText="例如：宝马、奥迪"
            floatingLabelText="请填写您中意的品牌名称"
            onChange={()=>this.handleTextChange()}
            />
          <div style={styles.root}>
            <Subheader>搜索结果</Subheader>
            <GridList
              cellHeight={120}
              cols={6}
              style={styles.gridList}
            >
              {brands.map((brand) => (
                <GridTile
                  key={brand.avatar}
                  title={brand.name}
                >
                  <img src={brand.avatar} />
                </GridTile>
              ))}
            </GridList>
          </div>
        </Dialog>
      </div>
    );
  }
}

const CSSBrandSearchDialog = CSSModules(BrandSearchDialog, styles);

const mapStateToProps = (state) => {
  const open = state.brandSearchDialogReducer.open;
  const brands = state.brandReducer.brands;
  return {
    open: open,
    brands: brands
  };
};

const ConnectedBrandSearchDialog = connect(mapStateToProps)(CSSBrandSearchDialog);

export default ConnectedBrandSearchDialog;
