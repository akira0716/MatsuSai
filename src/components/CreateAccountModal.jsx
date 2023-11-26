import React, { useState, useRef } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { initLoginInfo, LOGIN_URL } from "../lib/Settings";
import { createAccount } from "../lib/DataAccess";

function CreateAccountModal(props) {
  const { show, handleClose } = props;

  const [form, setForm] = useState(initLoginInfo);

  const checkRef = useRef(null);

  const onChangeForm = (e) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onClick = () => {
    if (form.passcode !== checkRef.current.value) {
      alert("登録パスワードと一致しません。");
      setForm(initLoginInfo);
      checkRef.current.value = "";
      return;
    }

    createAccount(LOGIN_URL, form);

    setForm(initLoginInfo);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>新規アカウント作成</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="3">
                登録利用者名
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="text"
                  name="user_name"
                  value={form.user_name}
                  onChange={onChangeForm}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                登録パスワード
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="password"
                  name="passcode"
                  value={form.passcode}
                  onChange={onChangeForm}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                確認パスワード
              </Form.Label>
              <Col sm="8">
                <Form.Control ref={checkRef} type="password" name="passcode" />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            閉じる
          </Button>
          <Button variant="primary" onClick={onClick}>
            登録
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateAccountModal;
