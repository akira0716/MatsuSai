import Form from "react-bootstrap/Form";

// css
import "../css/ComponentSelect.css";

const ComponentSelect = (props) => {
  const { onChange, options, value } = props;

  return (
    <>
      <div className="container_select">
        <h4 className="title">分類</h4>
        <Form.Select
          className="inputform"
          size="lg"
          onChange={onChange}
          name="classification"
          value={value}
          aria-selected="true"
        >
          {options.map((option, index) => {
            if (index === 0) {
              return <option key={index}>{option}</option>;
            } else {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            }
          })}
        </Form.Select>
      </div>
    </>
  );
};

export default ComponentSelect;
