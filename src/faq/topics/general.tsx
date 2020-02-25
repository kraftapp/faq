import React from "react";
import { ITopic } from "../Topic";

export const General: ITopic = {
  id: "general",
  title: "🙋 General",
  questions: [
    {
      id: "contact",
      title: "Is there any way to contact you?",
      content:
        <React.Fragment>
          <p>
            You can contact us though our email address <a href="mailto:kr4ftapps@gmail.com">kr4ftapps@gmail.com</a>.
          </p>
        </React.Fragment>
    }
  ]
};
