import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col lg={1}>
        <img
          width={50}
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXplq9cAR3e4WQ5slTpLBJqeo5iR8HTQxug&usqp=CAU"
        />
      </Col>
      <Col lg={11}>
        <div>{item?.name}</div>
        <div>{item?.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
