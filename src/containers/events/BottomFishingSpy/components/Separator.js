import React from 'react';
import CSSModules from 'react-css-modules';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './left_car.scss';
import separator from './../images/separator.png';

class LeftCar extends React.Component {

  render() {
    return (
      <div styleName='root'
        style={{
          backgroundImage: 'url(/' + separator + ')',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '80%',
          textAlign: 'center',
          color: 'rgb(107, 127, 146)',
          fontWeight: 'normal',
          fontSize: '1rem',
          marginTop: '5%',
          marginBottom: '5%',
          marginLeft: '10%'
        }}>
        { this.props.title }
      </div>
    );
  }
}

export default CSSModules(LeftCar, styles);
