import React from 'react'
import { Col, Row, Button } from "react-bootstrap"

const DatesAction = ({deleteData , viewData}) => {
  return (
    <Row className="justify-content-center">
          <Col sm="8" className="d-flex justify-content-between">
            <Button onClick={deleteData} className="btn-style p-2">Delete All</Button>
            <Button onClick={viewData} className="btn-style p-2">Display Data</Button>
          </Col>
        </Row>
  )
}
export default DatesAction 
