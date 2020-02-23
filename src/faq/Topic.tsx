import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { IQuestion, Question } from "./Question";
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
          {props.questions.map((q, index) => (
            <ListGroup.Item className="p-0" key={index}>
              <Question {...q} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
