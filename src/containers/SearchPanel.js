import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import LinearProgress from 'material-ui/LinearProgress';
import CSSModules from 'react-css-modules';
import styles from './../styles/search_panel.scss';
import BrandSearchDialog from './../containers/BrandSearchDialog';
import * as customerActions from './../actions/customer';
import * as brandSearchDialogActions from './../actions/brand_search_dialog';
import * as pageActions from './../actions/page';

class SearchPanel extends React.Component {
  showBrandSearchDialog() {
    this.props.dispatch(brandSearchDialogActions.show());
  }
  render() {
    return (
      <div styleName='root'>
        <div styleName='title'>
          筛选出您的爱车
        </div>
        <div styleName='condition'>
          <div styleName='line'>
            <h4 styleName='label'>品牌：</h4>
            <RaisedButton
              label='添加品牌'
              onTouchTap={()=>this.showBrandSearchDialog()}
              />
          </div>
          <div styleName='line'>
            <h4 styleName='label'>价格：</h4>
            <div styleName='progress'>
              <LinearProgress
                color='white'
                mode='determinate'
                value={50}
                />
            </div>
            <p styleName='value'>60 万</p>
          </div>
          <div styleName='line'>
            <h4 styleName='label'>级别：</h4>
            <FlatButton
              style={{
                margin: '0.1rem'
              }}
              label='全部'
              />
            <FlatButton
              style={{
                margin: '0.1rem'
              }}
              label='轿车'
              />
            <FlatButton
              style={{
                margin: '0.1rem'
              }}
              label='SUV'
              />
            <FlatButton
              style={{
                margin: '0.1rem'
              }}
              label='MPV'
              />
            <FlatButton
              style={{
                margin: '0.1rem'
              }}
              label='跑车'
              />
          </div>
        </div>
        <RaisedButton
          label='开始搜索'>
        </RaisedButton>
        <IconButton
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '50%'
          }}
          >
          <KeyboardArrowDown />
        </IconButton>
        <BrandSearchDialog open={true} />
      </div>
    );
  }
}

const CSSSearchPanel = CSSModules(SearchPanel, styles);

const mapStateToProps = (state) => {
  return {
  };
};

const ConnectedSearchPanel = connect(mapStateToProps)(CSSSearchPanel);

export default ConnectedSearchPanel;
