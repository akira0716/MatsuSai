// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

// hooks
import { useState, useEffect } from "react";

// components
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import MyAccordion from "./components/MyAccordion";

// lib
import { getData, deleteData } from "./lib/DataAccess";
import { initData, API_URL } from "./lib/Settings";

const App = () => {
  // 取得データ
  const [records, setRecords] = useState([]);
  // 取得データ(合計金額)
  const [sumAmount, setSumAmount] = useState(0);
  // 対象データ設定
  const [targetRecord, setTargetRecord] = useState(initData);
  // debug
  const [userId, setUserId] = useState(0);

  // ログイン時、ユーザのデータ取得
  useEffect(() => {
    if (userId === -1) {
      alert("利用者名または、パスワードが間違っています。");
    } else {
      const where = {
        user_id: userId,
      };
      getData(API_URL, setRecords, where);
    }
  }, [userId]);

  // データ更新時に合計金額の取得
  useEffect(() => {
    let sum = 0;
    records.forEach((record) => {
      sum += record.amount;
    });
    setSumAmount(sum);
  }, [records]);

  // データ編集ボタン押下時、対象データ設定
  const onClickEdit = (record) => {
    setTargetRecord(record);
  };

  // データ削除ボタン押下時、データ削除
  const onClickDelete = (id) => {
    const where = {
      user_id: userId,
    };

    if (window.confirm("本当に削除してよろしいですか？")) {
      deleteData(API_URL, setRecords, id, where);
    }
  };

  return (
    <>
      <Header userId={userId} setUserId={setUserId} />
      <div className="container display">
        <div className="area01">
          <div className="area01_header">
            <h2 className="area01_header_currentMonth">
              {new Date().getMonth() + 1}月
            </h2>
            <div className="area01_header_content">
              <br />
              <h2 className="title">今月の合計</h2>
              <p className="amount">{Number(sumAmount).toLocaleString()}円</p>
            </div>
          </div>
          <br />
          <InputForm
            url={API_URL}
            setRecords={setRecords}
            targetRecord={targetRecord}
            setTargetRecord={setTargetRecord}
            user_id={userId}
          />
        </div>
        <div className="records">
          <MyAccordion
            records={records}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
            targetRecordId={targetRecord.id}
          />
        </div>
      </div>
    </>
  );
};

export default App;
