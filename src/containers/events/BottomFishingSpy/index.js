import React from 'react';
import { connect } from 'react-redux';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CSSModules from 'react-css-modules';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme(lightBaseTheme);

import styles from './index.scss';
import background from './images/background.jpg';
import CenterCar from './components/CenterCar';
import LeftCar from './components/LeftCar';
import RightCar from './components/RightCar';
import Separator from './components/Separator';
import tianlai from './images/tianlai.png';
import benchi_gla from './images/benchi_gla.png';
import benchi_glc from './images/benchi_glc.png';
import benchi_c180 from './images/benchi_c180.png';
import benchi_c200 from './images/benchi_c200.png';
import c3_xr from './images/c3_xr.png';
import huangguan from './images/huangguan.png';

import CustomerDialog from 'containers/CustomerDialog';
import AlertDialog from 'containers/AlertDialog';
import * as customerDialogActions from 'actions/customer_dialog';

class BottomFishingSpy extends React.Component {

  showDialog(car_name) {
    this.props.dispatch(customerDialogActions.show(car_name));
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div
          styleName='root'
          style={{
            backgroundImage: 'url(/' + background + ')',
            backgroundSize: 'cover',
            paddingTop: '22rem',
            paddingBottom: '5rem'
          }}
          >
          <CenterCar
            imageSrc={ '/' + tianlai }
            title='新天籁·2013款特价优惠'
            indicativePrice='市场指导价18.58万'
            priceTitle='宜买车价'
            priceValue='15.38万'
            showDialog={(title)=>this.showDialog(title)}
            />
          <Separator title='奔驰·心之向 驰以往' />
          <LeftCar
            imageSrc={ '/' + benchi_gla }
            title='奔驰GLA'
            indicativePrice='指导价26.98万'
            priceTitle='宜买车落地价'
            priceValue='25.8万'
            showDialog={(title)=>this.showDialog(title)}
            />
          <RightCar
            imageSrc={ '/' + benchi_c200 }
            title='奔驰C200'
            indicativePrice='指导价35.38万'
            priceTitle='宜买车落地价'
            priceValue='34.8万'
            showDialog={(title)=>this.showDialog(title)}
            />
          <LeftCar
            imageSrc={ '/' + benchi_glc }
            title='奔驰GLC'
            indicativePrice='指导价42.8万'
            priceTitle='宜买车落地价'
            priceValue='46.9万'
            showDialog={(title)=>this.showDialog(title)}
            />
          <RightCar
            imageSrc={ '/' + benchi_c180 }
            title='奔驰C180'
            indicativePrice='指导价32.58万'
            priceTitle='宜买车落地价'
            priceValue='30.8万'
            showDialog={(title)=>this.showDialog(title)}
            />
          <Separator title='其它特惠车型' />
          <LeftCar
            imageSrc={ '/' + c3_xr }
            title='雪铁龙C3-XR'
            indicativePrice='指导价11.88万'
            priceTitle='宜买车落地价'
            priceValue='10.68万'
            showDialog={(title)=>this.showDialog(title)}
            />
          <RightCar
            imageSrc={ '/' + huangguan }
            title='丰田皇冠2.0'
            indicativePrice='指导价33.98万'
            priceTitle='宜买车落地价'
            priceValue='31.9万'
            showDialog={(title)=>this.showDialog(title)}
            />
          <div style={{
              textAlign: 'center',
              color: 'rgb(128, 128, 128)'
            }}>
            集团员工内部特供车
          </div>
          <CustomerDialog />
          <AlertDialog />
        </div>
      </MuiThemeProvider>
    );
  }
}

const CSSBottomFishingSpy = CSSModules(BottomFishingSpy, styles);

const mapStateToProps = (state) => {
  return {
  };
};

const ConnectedBottomFishingSpy = connect(mapStateToProps)(BottomFishingSpy);

export default ConnectedBottomFishingSpy;
