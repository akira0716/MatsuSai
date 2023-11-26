import Form from "react-bootstrap/Form";

// css
import "../css/InputForm_Amount.css";

const InputFormAmount = (props) => {
  const { onChange, value } = props;

  return (
    <div className="InputForm_Amount_container">
      <h4 className="title">金額</h4>
      <Form.Control
        className="InputForm_Amount"
        size="lg"
        type="tel"
        placeholder="金額"
        name="amount"
        onChange={onChange}
        value={value}
      />
      <h5 className="union">円</h5>
    </div>
  );
};

export default InputFormAmount;
