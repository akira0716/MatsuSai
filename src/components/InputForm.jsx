import "../../src/css/InputForm.css";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import ComponentSelect from "./ComponentSelect";
import { initData, options } from "../lib/Settings";
import InputFormAmount from "./InputForm_Amount";
import { addData, editData } from "../lib/DataAccess";
import { replaceFormatNumber, replaceNumberText } from "../lib/LibraryMethod";
import InputFormDate from "./InputForm_Date";

const InputForm = (props) => {
  const { url, setRecords, targetRecord, setTargetRecord, user_id } = props;

  const [form, setForm] = useState(initData);

  useEffect(() => {
    if (targetRecord.id) {
      // フラットな数字文字列に対してカンマ区切りを適用します
      targetRecord.amount = replaceFormatNumber(targetRecord.amount);
      setForm(targetRecord);
    }
  }, [targetRecord]);

  const handleInputChange = (e) => {
    let { value, name } = e.target;

    // 金額は、入力時に3桁区切りにする
    if (name === "amount") {
      // カンマ区切りされた文字列をフラットな数字文字列に変換します
      value = String(replaceNumberText(value));
      // フラットな数字文字列に対してカンマ区切りを適用します
      value = replaceFormatNumber(value);
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  // 登録or編集ボタン押下時処理
  const onClick_ok = () => {
    if (user_id <= 0) {
      alert("ログインしてください。");
      return;
    }

    // フォーム入力内容のチェック処理(ToDo)
    if (form.classification === "未選択" || form.classification === null) {
      alert("[分類]が未選択です。");
      return;
    }

    form.amount = String(replaceNumberText(form.amount));

    // 条件
    const where = {
      user_id,
    };

    // 登録情報 - 利用者IDの設定
    form.user_id = user_id;

    // 編集
    if (targetRecord.id) {
      if (editCheck(form, targetRecord)) {
        editData(url, setRecords, form, where);
      }
    }
    // 追加
    else {
      addData(url, setRecords, form, where);
    }
    setTargetRecord(initData); // 選択の初期化
    setForm(initData); // フォームの初期化
  };

  // キャンセルボタン押下時処理
  const onClick_cancel = () => {
    setTargetRecord(initData); // 選択の初期化
    setForm(initData); // フォームの初期化
  };

  const editCheck = (form, targetRecord) => {
    // 変更があるかチェック
    if (
      form.classification === targetRecord.classification &&
      form.amount === targetRecord.amount
    ) {
      return false;
    }
    return true;
  };

  return (
    <div className="inputForm">
      <div className="formArea">
        <InputFormDate onChange={handleInputChange} value={form.record_date} />
        <ComponentSelect
          onChange={handleInputChange}
          options={options}
          value={form.classification}
        />
        <InputFormAmount onChange={handleInputChange} value={form.amount} />
      </div>
      <div className="buttonArea">
        <Button
          className="buttonOk"
          variant={targetRecord.id ? "success" : "primary"}
          onClick={onClick_ok}
        >
          {targetRecord.id ? "編集" : "登録"}
        </Button>
        <Button
          className="buttonCancel"
          variant="secondary"
          onClick={onClick_cancel}
        >
          {targetRecord.id ? "キャンセル" : "クリア"}
        </Button>
      </div>
    </div>
  );
};

export default InputForm;
