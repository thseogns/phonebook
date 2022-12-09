import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "./ContectItem.module.css";
const ContectItem = ({ item }) => {
  return (
    <div className={style.box}>
      <Row>
        <Col md="2">
          <img
            src="https://i0.wp.com/ddrg.farmasi.unej.ac.id/wp-content/uploads/sites/6/2017/10/unknown-person-icon-Image-from.png?w=221&ssl=1"
            alt=""
          />
        </Col>
        <Col md="10" className={style.text}>
          <h5>{item.name}</h5>

          <p>{item.phonNumber}</p>
        </Col>
      </Row>
    </div>
  );
};

export default ContectItem;
