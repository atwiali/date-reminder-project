import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesList = ({ person }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="">
        <div className="rectangle p-2">
          {person.length ? (
            person.map((item) => {
              return (
                <div key={item.id} className="d-flex border-bottom mx-3 my-2">
                  <img className="img" src={item.img} alt="" />
                  <div className="px-3">
                    <p className=" name d-inline fs-5"> {item.name} </p>
                    <p className=" time fs-6"> {item.Date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="p-5 text-center ">No Meetings Today </h2>
          )}
        </div>
      </Col>
    </Row>
  );
};
export default DatesList;
