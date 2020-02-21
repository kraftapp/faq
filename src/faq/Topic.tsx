import React from "react";
import { Card, Accordion, Row, Col, ListGroup } from "react-bootstrap";
import { Question, IQuestion } from "./Question";
import "./Topic.scss";

export interface ITopic {
  id: string;
  title: string;
  questions: IQuestion[];
}

export const Topic = (props: ITopic) => {
  return (
    <Card className="topic" id={props.id}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <ListGroup variant="flush">
          {props.questions.map(q => (
            <ListGroup.Item id={q.id} className="p-0">
              <Question {...q} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
