import React from "react";
import { IQuestion } from "../Question";
import { ITopic } from "../Topic";

export const exampleData: ITopic = {
  id: "payment",
  title: "Payment and test",
  questions: [
    {
      id: "test1",
      title: " Test title",
      content: (
        <span>
          Esse eh um conteudo que pode ser uma simples string ou um html com
          imagen
        </span>
      )
    },
    {
      id: "test2",
      title: " Test title",
      content: <h1>Esse eh outro item de teste</h1>
    }
  ]
};
