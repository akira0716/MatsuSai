import React from "react";
import Badge from "react-bootstrap/Badge";

// svg
import { Trash, Pencil } from "../lib/Svg";

// css
import "../css/ComponentRecord.css";

const ComponentRecord = (props) => {
  const { record, onClickEdit, onClickDelete, editFlg } = props;

  let className = "form-control normal";
  if (editFlg) {
    className += " edit";
  }

  return (
    <>
      <h3 className={className}>
        <Badge bg="success" style={{ width: "80px" }}>
          {record.classification}
        </Badge>
        <span className="amount">{record.amount.toLocaleString()}円</span>
        <button type="button" onClick={onClickEdit}>
          <Pencil />
        </button>
        <button
          type="button"
          onClick={onClickDelete}
          disabled={editFlg ? true : false}
        >
          <Trash />
        </button>
      </h3>
    </>
  );
};

export default ComponentRecord;
