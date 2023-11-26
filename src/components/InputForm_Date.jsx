// 名前の付け方に問題あり。InputForm_Date → InputFormDate

import { Form } from "react-bootstrap";

// css
import "../css/InputForm_Date.css";

const InputFormDate = (props) => {
  const { onChange, value } = props;

  return (
    <>
      <div className="InputForm_Date_container">
        <h4 className="title">日付</h4>
        <Form.Control
          className="InputForm_Date"
          type="date"
          onChange={onChange}
          value={value}
          name="record_date"
        />
      </div>
      <br />
    </>
  );
};

export default InputFormDate;
