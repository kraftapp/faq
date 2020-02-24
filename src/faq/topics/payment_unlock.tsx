import React from "react";
import { ITopic } from "../Topic";

export const PaymentUnlockTopic: ITopic = {
  id: "purchase_unlock",
  title: "💳 Purchasing & Unlocking",
  questions: [
    {
      id: "how_purchase",
      title: "How do I purchase a clock face?",
      content: (
        <React.Fragment>
          <p>
            After installing the clock face, a <strong>5-digit code</strong> will pop up on your watch.
            </p>
          <p>
            Access the website shown on your watch <a href="https://kiezelpay.com/code/" target="_blank" rel="noopener noreferrer">(or click here)</a> and type the code in.
            </p>
          <p>
            Once purchased, the clock face will instantly unlock for you.
          </p>
        </React.Fragment>
      )
    },
    {
      id: "bundle_purchase",
      title: "How do I purchase a bundle?",
      content: (
        <React.Fragment>
          <p>
            Bundles are usually a great way of saving money. If a bundle is offered with a clock face, it will probably have a better value for money.
            </p>
          <p>
            Not every clock face is part of a bundle, but if the one you are purchasing is you will have the choice to opt in for the bundle during the payment.
            </p>
          <p>
            You can also purchase bundles directly from our website at:
            </p>
          <ul className="mb-0">
            <li><a href="http://www.kr4ft.com" target="_blank" rel="noopener noreferrer">Kr4ft</a></li>
            <li><a href="http://www.tidalwave.eu" target="_blank" rel="noopener noreferrer">Tidalwave</a></li>
          </ul>
        </React.Fragment>
      )
    },
    {
      id: "already_paid",
      title: "I have already paid, do I need to purchase again?",
      content: (
        <React.Fragment>
          <p>
            Definitely not, purchases are valid for a lifetime. Once you have purchased a clock face you will have it for as long as you want.
          </p>
          <p>
            Unfortunately Fitbit does not always allow us to recognize you again after (re)installing an app or clock face, so our system might think you are a new customer when that happens and might ask you to pay again.
          </p>
          <p>
            If that does happen, just access the <a href="https://kiezelpay.com/unlock" target="_blank" rel="noopener noreferrer">unlock feature</a>, type in your email and the <strong>5-digit code</strong> displayed and you will have access to the clock face again.
          </p>
        </React.Fragment>
      )
    },
    {
      id: "find_own_clockfaces",
      title: "How can I find which clock faces do I own?",
      content: (
        <React.Fragment>
          <p>
            It might be hard to keep track of what clock faces you might own, but luckily you can check it up using the <a href="https://kiezelpay.com/lookup" target="_blank" rel="noopener noreferrer">lookup feature</a>.
          </p>
        </React.Fragment>
      )
    },
    {
      id: "refund",
      title: "I'm not satisfied with a purchase and I want a refund!",
      content: (
        <React.Fragment>
          <p>
            We are deeply sorry to hear about it. If you think there's something we can do to change your mind please <a href="mailto:kr4ftmail@gmail.com">contact us</a> and we will try our best to sort whatever problems you might be facing.
          </p>
          <p>
            If you are decided you want to request a refund you will need to <a href="https://kiezelpay.com/faq/faq-refund" target="_blank" rel="noopener noreferrer">contact our payment provider</a> and they will handle it for you.
          </p>
        </React.Fragment>
      )
    }
  ]
};
