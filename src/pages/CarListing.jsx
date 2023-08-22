import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import CarItem from '../components/UI/CarItem'
import carData from '../assets/data/carData'

const CarListing = () => {

  const [value, setValue] = useState('select')

  if (value === 'low') {
    carData.sort(function (a, b) {
      return a.price - b.price
    })

  } else if (value === 'high') {
    carData.sort(function (a, b) {
      return a.price - b.price
    }).reverse()
  }

  const sortHandler = (e) => {
    setValue(e.target.value)
  }

  return <Helmet title='Cars'>
    <CommonSection title='Car Listing' />
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="d-flex align-items-center gap-3 mb-5">
              <span className='d-flex align-items-center gap-2'><i className='ri-sort-asc'></i> Sort By</span>
              <select value={value} onChange={e => sortHandler(e)}>
                <option value='select'>Select</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
            </div>
          </Col>
          {carData.map((item) => <CarItem item={item} key={item.id} />)}
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default CarListing