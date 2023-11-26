import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { initLoginInfo } from "../lib/Settings";

function MyModal(props) {
  const { show, handleClose, onClickLogin } = props;

  const [form, setForm] = useState(initLoginInfo);

  const onChangeForm = (e) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onClick = () => {
    onClickLogin(form);
    setForm(initLoginInfo);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>ログイン</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="3">
                利用者名
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
                パスワード
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            閉じる
          </Button>
          <Button variant="primary" onClick={onClick}>
            ログイン
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
