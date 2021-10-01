import * as React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import {AppBar, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import "./home.css";
import sprintingLogo from '../assets/logo.png';
import image from '../assets/image.png';
import {Messages, MESSAGES} from './Messages';

export const Home = () => {
    const [messageState, setMessageState] = React.useState('installing');
    const timeoutRef = React.useRef(0);

    React.useEffect(() => {
        return;
        if(messageState){
            const currentIndex = MESSAGES.findIndex(message => message.id === messageState);
            const currentMessage = MESSAGES[currentIndex] ?? MESSAGES[0];
            const nextMessage = MESSAGES[currentIndex + 1] ?? MESSAGES[0];
            console.log("EVO MEEEEE", currentMessage);
            if(currentMessage.id === 'hidden'){
                return;
            }
            setTimeout(() => {
                setMessageState(nextMessage.id);
            }, currentMessage.timeout);
        }
    }, [messageState])
    

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
                    >

                    </IconButton>
                    <Button color="inherit">
                        <img className={"logo"} src={sprintingLogo}/>
                    </Button>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={"headerText"}>
                        P1 - Replace your DevOps engineers with a button!
                    </Typography>

                </Toolbar>
            </AppBar>
            <Grid container spacing={2} className={"wrapper"} >
                <Grid item xs={12}>
                        <TextField label="Please enter your github repository" color={"secondary"} className={"textField"} focused />
                </Grid>
                <Grid item xs={12}>
                        <Button onClick={() => {
                        setMessageState('cloning');
                    }} variant="contained">Let the magic happen!</Button>
                </Grid>
                <Grid item xs={2} >
                </Grid>
                {/* <Grid item xs={4} >
                    <Typography variant="h4" component="div" gutterBottom className={"text"}>
                        TURN YOUR HIGH QUALITY DEVOPS INTO USEFUL BUTTON
                    </Typography>
                </Grid> */}
                {/* <img src={'https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Finstall.appcenter.ms%2Fusers%2Fmilan.gluhic%2Fapps%2Fdemoapp%2Fdistribution_groups%2Fpublic&chs=180x180&choe=UTF-8&chld=L%7C2'} rel='nofollow' alt='qr code'></img> */}

                <Grid item xs={4}>
                    <Messages messageState={messageState} />
                </Grid>
                <Grid item xs={6} >
                    <img className={"image"} src={image}/>
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>


        </>
    )
}