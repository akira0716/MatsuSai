import React from "react";
import Accordion from "react-bootstrap/Accordion";
import MyAccordionItem from "./MyAccordionItem";

function MyAccordion(props) {
  const { records, onClickEdit, onClickDelete, targetRecordId } = props;

  const allDates = records.map((record) => record.record_date);
  const set = new Set(allDates);
  const dates = [...set].sort();

  return (
    <Accordion>
      {dates.map((date, index) => {
        const currentRecords = records.filter(
          (record) => date === record.record_date
        );

        return (
          <MyAccordionItem
            key={index}
            id={index}
            date={date}
            records={currentRecords}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
            targetRecordId={targetRecordId}
          />
        );
      })}
    </Accordion>
  );
}

export default MyAccordion;
