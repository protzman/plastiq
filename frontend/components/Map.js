import React, { Component } from 'react'
import MapGL, { FlyToInterpolator } from 'react-map-gl'

import ControlPanel from './control-panel'

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic3Byb3R6bWFuIiwiYSI6ImNqOXJtYnFxZjAwbzkzMnBjb2xsZ2doaXkifQ.WWy_q1IKflDyt4mJxJyUEw' // Set your mapbox token here

export default class Map extends Component {
  state = {
    viewport: {
      latitude: 37.7751,
      longitude: -122.4193,
      zoom: 11,
      bearing: 0,
      pitch: 0
    }
  };

  _onViewportChange = viewport => this.setState({
    viewport: { ...this.state.viewport, ...viewport }
  });

  _goToViewport = ({ longitude, latitude }) => {
    this._onViewportChange({
      longitude,
      latitude,
      zoom: 11,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 3000
    })
  };

  render() {
    const { viewport, settings } = this.state

    return (
      <div style={{
        height: 'calc(100% - 2em)',
        position: 'absolute',
        bottom: '1em',
        top: '1em',
        right: '1em',
        left: 'calc(15% + 1em)'
      }}
      >
        <MapGL
          {...viewport}
          {...settings}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/sprotzman/cjx68ibnzbaz01cqsbda04pkj"
          onViewportChange={this._onViewportChange}
          dragToRotate={false}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
        <ControlPanel
          containerComponent={this.props.containerComponent}
          onViewportChange={this._goToViewport}
        />
      </div>
    )
  }
}
