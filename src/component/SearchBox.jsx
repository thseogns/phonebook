import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import style from "./SearchBox.module.css";
const SearchBox = () => {
  const [keyword, setKeyword] = useState();
  let dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "SUERCH_BY_NAME", payload: { keyword } });
  };
  return (
    <form className={style.form} onSubmit={searchByName}>
      <Row>
        <Col xs>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col xs="auto" className={style.text}>
          <Button variant="primary" type="submit">
            찾기
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default SearchBox;
