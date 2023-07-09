import React, { Fragment } from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routes from '../../routers/Routes'


const Layout = () => {
  return <Fragment>
    <Header />
    <div>
        <Routes />
    </div>
    <Footer />
  </Fragment>
}

export default Layout