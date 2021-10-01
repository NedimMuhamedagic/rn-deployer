import React from "react";
import { Typography } from "@mui/material";
import "./messages.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export const MESSAGES = [
  { timeout: 4000, message: "Preparing the git repository", id: "cloning" },
  { timeout: 6000, message: "Analysing your app", id: "analysing" },
  {
    timeout: 4000,
    message: "Moving build configurations to the project",
    id: "moving",
  },
  {
    timeout: 8000,
    message: "Installing necessary dependencies",
    id: "installing",
  },
  { timeout: 12000, message: "Creating the build pipeline", id: "creating" },
  {
    timeout: 1000,
    message: "Automatically generating build pipelines",
    id: "pipeline",
  },
  {
    timeout: 3000,
    message: "Generating Android signing keystore",
    id: "keystore",
  },
  { timeout: 13000, message: "Building the Android app", id: "building" },
  {
    timeout: 8000,
    message: "Pulling iOS provisioning profiles",
    id: "provisioning",
  },
  {
    timeout: 6000,
    message: "Attaching iOS provisioning profiles to the XCode project",
    id: "xcode",
  },
  { timeout: 12000, message: "Building the iOS app", id: "buildingios" },
  {
    timeout: 13000,
    message: "Pushing the built apps to Microsoft AppCenter",
    id: "appcenter",
  },
  { timeout: 100, message: "All done!", id: "done" },
  { timeout: 0, message: "", id: "hidden" },
];
export const Messages = ({ messageState }) => {
  const messageStateIndex = MESSAGES.findIndex(
    (message) => message.id === messageState
  );

  return (
    <div>
      {MESSAGES.map((data, index) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {messageStateIndex === index && index !== MESSAGES.length - 1 ? (
            <Loader type="Triangle" color="#00BFFF" height={40} width={40} />
          ) : (
            <>
              <div style={{ width: 40, height: 40 }} />
            </>
          )}
          <Typography
            id={data.id}
            variant="h6"
            component="div"
            gutterBottom
            className={`message ${messageStateIndex < index ? "gray" : ""}`}
            color={messageStateIndex === index ? "primary" : "secondary"}
          >
            {data.message}
          </Typography>
        </div>
      ))}
    </div>
  );
};
