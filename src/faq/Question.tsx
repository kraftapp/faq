import React, { useState } from "react";
import { Card, Accordion, Row, ListGroup, Collapse } from "react-bootstrap";
import "./Question.scss";

export interface IQuestion {
  id: string;
  title: string;
  content: any;
  keywords?: string;
  opened?: boolean;
}

export const Question = (props: IQuestion) => {
  const [opened, setOpened] = useState(props.opened || false);

  return (
    <div
      className={`question ${opened ? "opened" : ""}`}
      onClick={() => setOpened(!opened)}
    >
      <div className="question-title">{props.title}</div>
      <Collapse in={opened}>
        <div className="question-body">{props.content}</div>
      </Collapse>
    </div>
  );
};
