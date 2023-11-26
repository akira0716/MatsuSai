import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ComponentRecord from "./ComponentRecord";

// css
import "../css/MyAccordionItem.css";

//lib
import { week } from "../lib/Settings";

const MyAccordionItem = (props) => {
  const { id, date, records, onClickEdit, onClickDelete, targetRecordId } =
    props;

  const format = new Date(date);

  return (
    <Accordion.Item eventKey={id}>
      <Accordion.Header>
        <span className="accordionHeader">
          {format.getFullYear()}年{format.getMonth() + 1}月{format.getDate()}日
          ({week[format.getDay()]})
        </span>
      </Accordion.Header>
      <Accordion.Body>
        {records.map((record) => {
          return (
            <ComponentRecord
              key={record.id}
              record={record}
              onClickEdit={() => onClickEdit(record)}
              onClickDelete={() => onClickDelete(record.id)}
              editFlg={targetRecordId === record.id}
            />
          );
        })}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default MyAccordionItem;
