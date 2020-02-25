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
    {
      id: "change_temperature_unit",
      title: "How can I change the temperature from Celsius to Farenheit (or vice-versa)?",
      content:
        <React.Fragment>
          <p>
            Some of our clock faces have a <strong>units and formats</strong> section in the settings page which let you configure how data is displayed according to your personal preference.
          </p>
          <p>
            If the clock face does not have a settings page or if the settings page does not have the aforementioned section the temperature unit will be defined by the Fitbit <strong>Weather</strong> app.
          </p>
          <p>
            To change the temperature unit in the <strong>Weather</strong> app follow the steps bellow:
          </p>
          <ul>
            <li>Open the Fitbit app in your phone;</li>
            <li>Tap the icon in the upper left corner;</li>
            <li>Select your watch in the devices list;</li>
            <li>Tap on <strong>My Apps</strong>;</li>
            <li>Tap on the settings cog next to <strong>Weather</strong>;</li>
            <li>Select the unit of your preference (either Celsius or Farenheit);</li>
            <li>Tap on <strong>Done</strong>;</li>
            <li>Go back to the previous page;</li>
            <li>Make sure your phone synced the new setting to your tracker by verifying the sync time is shortly before the current time. If not, you'll need to manually sync. To manually sync just scroll down and tap <strong>Sync Now</strong>;</li>
          </ul>
        </React.Fragment>
    },
    {
      id: "change_distance_unit",
      title: "How can I change the distance from Kilometers to Miles (or vice-versa)?",
      content:
        <React.Fragment>
          <p>
            Some of our clock faces have a <strong>units and formats</strong> section in the settings page which let you configure how data is displayed according to your personal preference.
          </p>
          <p>
            If the clock face does not have a settings page or if the settings page does not have the aforementioned section the distance unit will be defined by your <strong>Fitbit length unit preference</strong>.
          </p>
          <p>
            To change the length unit preference follow the steps bellow:
          </p>
          <ul>
            <li>Access your <a href="https://www.fitbit.com/user/profile/edit" target="_blank" rel="noopener noreferrer">Fitbit profile</a> page;</li>
            <li>Tap on <strong>Units</strong>;</li>
            <li>In the <strong>Length</strong> field, select either <strong>Feet/Inches</strong> (for Miles) or <strong>Centimeters</strong> (for Kilometers);</li>
            <li>Tap on <strong>Submit</strong>;</li>
            <li>Open the Fitbit app in your phone;</li>
            <li>Tap the icon in the upper left corner;</li>
            <li>Select your watch in the devices list;</li>
            <li>Make sure your phone synced the new setting to your tracker by verifying the sync time is shortly before the current time. If not, you'll need to manually sync. To manually sync just scroll down and tap <strong>Sync Now</strong>;</li>
          </ul>
        </React.Fragment>
    },
    {
      id: "change_date_format",
      title: "How can I display the date in a different format?",
      content:
        <React.Fragment>
          <p>
            Some of our clock faces have a <strong>units and formats</strong> section in the settings page which let you configure how data is displayed according to your personal preference.
          </p>
          <p>
            If the clock face does not have a settings page or if the settings page does not have the aforementioned section the date format will be defined by your <strong>Fitbit profile language</strong>. Usually the format will be <strong>MM/DD</strong> for English (US) and <strong>DD/MM</strong> for everything else.
          </p>
          <p>
            To change the language in your Fitbit profile follow the steps bellow:
          </p>
          <ul>
            <li>Access your <a href="https://www.fitbit.com/user/profile/edit" target="_blank" rel="noopener noreferrer">Fitbit profile</a> page;</li>
            <li>Select your preferred language in the <strong>Language by region/country</strong> section;</li>
            <li>Tap on <strong>Submit</strong>;</li>
            <li>Open the Fitbit app in your phone;</li>
            <li>Tap the icon in the upper left corner;</li>
            <li>Select your watch in the devices list;</li>
            <li>Make sure your phone synced the new setting to your tracker by verifying the sync time is shortly before the current time. If not, you'll need to manually sync. To manually sync just scroll down and tap <strong>Sync Now</strong>;</li>
          </ul>
        </React.Fragment>
    },
    {
      id: "change_time_format",
      title: "How can I display the time in a different format?",
      content:
        <React.Fragment>
          <p>
            Some of our clock faces have a <strong>units and formats</strong> section in the settings page which let you configure how data is displayed according to your personal preference.
          </p>
          <p>
            If the clock face does not have a settings page or if the settings page does not have the aforementioned section the time format will be defined by your <strong>Fitbit clock display time preference</strong>.
          </p>
          <p>
            To change the clock display time preference follow the steps bellow:
          </p>
          <ul>
            <li>Access your <a href="https://www.fitbit.com/user/profile/edit" target="_blank" rel="noopener noreferrer">Fitbit profile</a> page;</li>
            <li>Select your preferred format in the <strong>Clock Display Time</strong> section;</li>
            <li>Tap on <strong>Submit</strong>;</li>
            <li>Open the Fitbit app in your phone;</li>
            <li>Tap the icon in the upper left corner;</li>
            <li>Select your watch in the devices list;</li>
            <li>Make sure your phone synced the new setting to your tracker by verifying the sync time is shortly before the current time. If not, you'll need to manually sync. To manually sync just scroll down and tap <strong>Sync Now</strong>;</li>
          </ul>
        </React.Fragment>
    }
  ]
};
