import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./ContectForm.module.css";
const ContectForm = () => {
  const [name, setName] = useState("");
  const [phonNumber, setPhonNumber] = useState("");
  const dispatch = useDispatch();
  // const getName = (e) => {
  //   setName(e.target.value);
  // };
  const addContact = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phonNumber },
    });
    setName("");
    setPhonNumber("");
  };
  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label className={style.word}>이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContect">
        <Form.Label className={style.word}>전화번호</Form.Label>
        <Form.Control
          type="numver"
          placeholder="전화번호를 입력해주세요"
          onChange={(e) => setPhonNumber(e.target.value)}
          value={phonNumber}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  );
};

export default ContectForm;
