import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import Login from '../components/Login'
import Header from '../components/Header'
import Meta from '../components/Meta'


injectGlobal`
  @font-face {
    font-family: 'Raleway', sans-serif !important;
    font-style: normal;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Raleway', sans-serif !important;
  }
`
class Index extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <Login />
      </div>
    )
  }
}

export default Index
