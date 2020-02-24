import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import "./Question.scss";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";

export interface IQuestion {
  id: string;
  title: string;
  content: any;
  keywords?: string;
  opened?: boolean;
}

export const Question = (props: IQuestion) => {
  const bookmarked = `#${props.id}` === window.location.hash;

  const [opened, setOpened] = useState(bookmarked);

  return (
    <div id={props.id} className={`question ${opened ? "opened" : ""}`}>
      <div className="question-title" onClick={() => setOpened(!opened)}>
        {props.title}
      </div>
      <Collapse in={opened}>
        <div className="question-body">
          {props.content}

          <div className="question-footer mt-2 py-1 text-right">
            <span className="text-muted mb-1">Did you find this helpful?</span>
            <div>
              <button
                className="btn btn-light btn-sm mr-2"
                data-track-section="question"
                data-track-action="unhelpful"
                data-track-value={props.id}
                onClick={e => setOpened(false)}
              >
                <IoMdThumbsDown className="icon" />
                No
              </button>
              <button
                data-track-section="question"
                data-track-action="helpful"
                data-track-value={props.id}
                className="btn btn-light btn-sm"
                onClick={e => setOpened(false)}
              >
                <IoMdThumbsUp className="icon" />
                Yes
              </button>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};
