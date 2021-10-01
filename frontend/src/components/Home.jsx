import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import "./home.css";
import sprintingLogo from "../assets/logo.png";
import image from "../assets/image.png";
import { Messages, MESSAGES } from "./Messages";

export const Home = () => {
  const [messageState, setMessageState] = React.useState(null);
  const [urlValue, setUrlValue] = React.useState("");
  const timeoutRef = React.useRef(0);

  React.useEffect(() => {
    // return;
    if (messageState) {
      const currentIndex = MESSAGES.findIndex(
        (message) => message.id === messageState
      );
      const currentMessage = MESSAGES[currentIndex] ?? MESSAGES[0];
      const nextMessage = MESSAGES[currentIndex + 1] ?? MESSAGES[0];
      console.log("EVO MEEEEE", currentMessage);
      if (currentMessage.id === "hidden") {
        return;
      }
      setTimeout(() => {
        setMessageState(nextMessage.id);
      }, currentMessage.timeout);
    }
  }, [messageState]);

  const sendRequest = () => {
    setMessageState("cloning");
    window.fetch(`http://localhost:3005/doMagic`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        gitUrl: urlValue,
      }),
    });
  };

  return (
    <>
      <AppBar position="static" className={"header"} elevation={3}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Button color="inherit">
            <img className={"logo"} src={sprintingLogo} />
          </Button>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className={"headerText"}
          >
            P1 - Replace your DevOps engineers with a button!
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} className={"wrapper"}>
        <Grid item xs={12}>
          <TextField
            id="repoUrl"
            label="Please enter your github repository"
            color={"secondary"}
            className={"textField"}
            focused
            onChange={(e) => setUrlValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={sendRequest} variant="contained">
            Let the magic happen!
          </Button>
        </Grid>
        <Grid item xs={2}></Grid>
        {messageState !== null ? (
          <Grid item xs={4}>
            <Messages messageState={messageState} />
          </Grid>
        ) : (
          <>
            <Grid item xs={4}>
              <Typography
                variant="h4"
                component="div"
                gutterBottom
                className={"text"}
              >
                TURN YOUR HIGH QUALITY DEVOPS INTO USEFUL BUTTON
              </Typography>
            </Grid>
          </>
        )}

        <Grid item xs={6}>
          <img className={"image"} src={image} />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
};
