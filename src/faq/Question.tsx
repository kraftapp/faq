import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import "./Question.scss";

export interface IQuestion {
  title: string;
  content: any;
  keywords?: string;
  opened?: boolean;
}

export const Question = (props: IQuestion) => {
  const [opened, setOpened] = useState(props.opened || false);

  return (
    <div
      className={`question ${opened ? "opened" : ""}`}>
      <div className="question-title" onClick={() => setOpened(!opened)}>{props.title}</div>
      <Collapse in={opened}>
        <div className="question-body">{props.content}</div>
      </Collapse>
    </div>
  );
};
