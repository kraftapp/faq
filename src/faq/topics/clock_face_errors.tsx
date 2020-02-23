import React from "react";
import { ITopic } from "../Topic";

export const ClockfaceErrors: ITopic = {
  id: "clockface_errors",
  title: "🕒 Clock face errors",
  questions: [
    {
      title: "There is an error message \"Clock Error\" in my watch. How do I fix it?",
      content: (
        <React.Fragment>
          <p>
            This usually occurs if there is an interruption between your watch and phone while installing clock faces. Unfortunately, it appears to be fairly random and not limited to our clock faces. If you restart your watch and force quit the Fitbit app on your phone and try again, it should then install normally.
            </p>
          <p>
            If the "Clock Error" message happens by itself after using the clock face for a while, swapping to a different clock face then installing this clock face again should fix it.
            </p>
        </React.Fragment>
      )
    },
    {
      title: "The installation never completes, it just bounces back and forth.",
      content: (
        <React.Fragment>
          <p>
            The Fitbit connection can be unstable when installing which can make things difficult. The best way to fix this issue is to hold all the button(s) on your watch until the Fitbit logo appears. While your watch is rebooting, turn your phone off and on again. After both devices turn back on, open the Fitbit app and sync and everything should work again.
            </p>
          <p>
            If that doesn't work and you're using the new Fitbit update, try to switch clocks using the Clocks app on your watch - this can force the app to finish switching or installing.
            </p>
        </React.Fragment>
      )
    },
    {
      title: "Some parts of the clock face are missing or displaying incorrectly.",
      content: (
        <React.Fragment>
          <p>
            This can happen after installing a Fitbit app update or when you install a new version of a clock face. Please go to your clock face in the Fitbit app, and toggle all the permissions off and on again.
            </p>
          <p>
            If that doesn't work, please install a different clock face, then install this one again.
            </p>
        </React.Fragment>
      )
    },
    {
      title: "The weather forecast is not updating!",
      content: (
        <React.Fragment>
          <p>
            The weather data is sent to your watch through your phone, so make sure your phone is nearby with Bluetooth turned on, location service enabled and access to the Internet.
            </p>
          <p>
            In the Fitbit app you might want to check if the clock face permissions are enabled.
            </p>
          <p>
            If you are still facing issues with the weather forest after checking the items above, you can try the following:
            </p>
          <ul>
            <li>Restart your mobile phone Bluetooth (turn it off/on again);</li>
            <li>Sync your watch with Fitbit;</li>
            <li>Reinstall the clockface (install a different one and then install it back);</li>
          </ul>
        </React.Fragment>
      )
    },
    {
      title: "What is this \"Access the settings page in your mobile device and login using your Fitbit account to use this clockface\" message about?",
      content: (
        <React.Fragment>
          <p>
            We did try to make our users lives easier in our first clock faces by providing a way for them to avoid having to unlock their clock faces every time they did switch/reinstall them.
            </p>
          <p>
            By asking our users to log in using their Fitbit account we have access to an unique identifier which we can use in subsequent installations to identify users back.
            </p>
          <p>
            Unfortunately this feature apparently caused more issues than solved them, as some users seem to get stuck with a persistent message even after loging in succesfully.
          </p>
          <p>
            We are slowly removing this feature from our clock faces but in the meantime if you are affected by the problem described try the following:
          </p>
          <ul>
            <li>Restart your mobile phone Bluetooth (turn it off/on again);</li>
            <li>Sync your watch with Fitbit;</li>
            <li>Reinstall the clockface (install a different one and then install it back);</li>
          </ul>
        </React.Fragment>
      )
    },
    {
      title: "None of the above works, what else can I try?",
      content: (
        <React.Fragment>
          <p>
            If you swap to another clock face and swap back to this one, it should fix any strange issues you may be having. Please also ensure you have the latest Fitbit app updates and installed any watch updates too.
            </p>
          <p>
            There is also a known Fitbit issue when updating the Fitbit app that can change your clock face permissions. Please go to your clock face in the Fitbit app, and toggle all the permissions off and on again.
            </p>
          <p>
            Ultimately you can try the following:
            </p>
          <ul>
            <li>Restart your mobile phone Bluetooth (turn it off/on again);</li>
            <li>Sync your watch with Fitbit;</li>
            <li>Reinstall the clockface (install a different one and then install it back);</li>
          </ul>
          <p>
            If the steps above didn't help you, you might want to try <a href="mailto:kr4ftmail@gmail.com">contacting us</a> directly.
          </p>
        </React.Fragment>
      )
    },
  ]
};
