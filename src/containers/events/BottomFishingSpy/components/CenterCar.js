import React from 'react';
import CSSModules from 'react-css-modules';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './center_car.scss';

class Center extends React.Component {

  render() {
    const showDialog = this.props.showDialog;
    return (
      <div styleName='root'>
        <div styleName='image'>
          <img src={this.props.imageSrc} />
        </div>
        <div styleName='title'>
          { this.props.title }
        </div>
        <div styleName='indicative-price'>
          { this.props.indicativePrice }
        </div>
        <div styleName='price'>
          <span styleName='title'>
            { this.props.priceTitle }
          </span>
          <span styleName='value'>
            { this.props.priceValue }
          </span>
        </div>
        <div>
          <RaisedButton
            label="立即预约"
            primary={true}
            style={{
              marginTop: '1rem'
            }}
            onClick={() => showDialog && showDialog(this.props.title)}
            />
        </div>
      </div>
    );
  }
}

export default CSSModules(Center, styles);
