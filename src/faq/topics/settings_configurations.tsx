import React from "react";
import { ITopic } from "../Topic";

export const SettingsConfigurations: ITopic = {
  id: "settings_configurations",
  title: "⚙️ Settings & Configurations",
  questions: [
    {
      id: "access_settings",
      title: "How can I access the settings page?",
      content:
        <React.Fragment>
          <p>
            You can access the settings page by following these simple steps:
          </p>
          <ul>
            <li>Open the Fitbit app on your phone;</li>
            <li>Tap the icon in the top left corner;</li>
            <li>Select your watch in the list;</li>
            <li>Select the clockface;</li>
            <li>Click on <strong>settings</strong>;</li>
          </ul>
        </React.Fragment>
    },
    {id: "change_temperature",
      title: "How can I change the temperature from Celsius to Farenheit?",
      content:
        <React.Fragment>
        </React.Fragment>
    },
    {
      id: "change_date_format",
      title: "How can I display the date in a different format?",
      content:
        <React.Fragment>
        </React.Fragment>
    },
    {
      id: "change_time_format",
      title: "How can I display the time in a different format?",
      content:
        <React.Fragment>
        </React.Fragment>
    },
  ]
};
