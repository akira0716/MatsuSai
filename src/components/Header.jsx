import "../css/Header.css";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import MyModal from "./MyModal";
import { loginCheck } from "../lib/DataAccess";
import { LOGIN_URL } from "../lib/Settings";
import CreateAccountModal from "./CreateAccountModal";

const Header = (props) => {
  const { userId, setUserId } = props;

  const [show, setShow] = useState(false); // ログイン
  const [show2, setShow2] = useState(false); // 新規アカウント作成

  // ログイン
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 新規アカウント作成
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const onClickLogin = (loginInfo) => {
    loginCheck(LOGIN_URL, setUserId, loginInfo);
    handleClose();
  };

  const onClickLogout = () => {
    setUserId(0);
  };

  return (
    <header className="header">
      <h1 className="app-title">食費管理アプリ</h1>
      <div className="signIn">
        {userId === 0 ? (
          <Button variant="primary" onClick={handleShow}>
            ログイン
          </Button>
        ) : (
          <Button variant="primary" onClick={onClickLogout}>
            ログアウト
          </Button>
        )}
      </div>
      <div className="create">
        <Button variant="warning" onClick={handleShow2}>
          新規アカウント作成
        </Button>
      </div>

      <MyModal
        show={show}
        handleClose={handleClose}
        onClickLogin={onClickLogin}
      />
      <CreateAccountModal show={show2} handleClose={handleClose2} />
    </header>
  );
};

export default Header;
