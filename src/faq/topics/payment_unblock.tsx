import React from "react";
import { ITopic } from "../Topic";

export const PaymentUnblockTopic: ITopic = {
  id: "purchase_unblock",
  title: "Purchase & Unblock",
  questions: [
    {
      id: "already_paid_persistent",
      title: "I've already paid but it keeps asking me to pay again",
      content: (
        <React.Fragment>
          <p>
            When the code pops up after installing a clock face, enter the new 5
            digit code here. Your clock face will instantly unlock for free.{" "}
          </p>
          <p>
            This is a current limitation of the Fitbit platform when swapping
            clock faces, however there will be an update out soon which will
            automatically unlock clock faces. You can also bookmark this page to
            install and unlock clock faces quickly in future.
          </p>
        </React.Fragment>
      )
    },
    {
      id: "how_purchase",
      title: "How to purchase a clock face?",
      content: <React.Fragment></React.Fragment>
    },
    {
      id: "how_purchase",
      keywords: "purchase bundle package",
      title: "How to purchase a bundle?",
      content: (
        <React.Fragment>
          <img
            alt="display how the purchase flow works"
            src="https://reno.watch/img/purchase.png"
            className="img-fluid"
          />
          <p>
            Thank you for your support! After installing a clock face, a code
            will pop up on your watch. Head to the website shown on your watch
            (or tap here) and type the code in. Once purchased, the clock face
            will instantly unlock for you.
          </p>
        </React.Fragment>
      )
    }
  ]
};
