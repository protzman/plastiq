import React, { PureComponent } from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

import CITIES from '../static/cities.json'

const defaultContainer = ({ children }) => <div className="control-panel">{children}</div>

export default class ControlPanel extends PureComponent {
  _renderButton = (city, index) => (
    <div key={`btn-${index}`} className="input" style={{ margin: '0em 3em' }}>
      <Radio
        type="radio"
        name="city"
        id={`city-${index}`}
        defaultChecked={city.city === 'San Francisco'}
        onClick={() => this.props.onViewportChange(city)}
      />
      <label htmlFor={`city-${index}`}>{city.city}</label>
    </div>
  );

  render() {
    const Container = this.props.containerComponent || defaultContainer

    return (
      <Container>
        {CITIES.filter(city => city.state === 'California').map(this._renderButton)}
      </Container>
    )
  }
}
