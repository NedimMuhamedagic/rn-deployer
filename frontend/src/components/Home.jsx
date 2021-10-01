import * as React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import {AppBar, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import "./home.css";
import sprintingLogo from '../assets/logo.png';
import image from '../assets/image.png';
export const Home = () => {
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
                        <Button variant="contained">Let the magic happen!</Button>
                </Grid>
                <Grid item xs={2} >
                </Grid>
                <Grid item xs={4} >
                    <Typography variant="h4" component="div" gutterBottom className={"text"}>
                        TURN YOUR HIGH QUALITY DEVOPS INTO USEFUL BUTTON
                    </Typography>
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