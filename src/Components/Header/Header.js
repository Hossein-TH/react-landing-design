import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import circle from '../../Assets/img/circle.svg';
import Presentation from '../../Assets/img/Presentation.svg';
import Logo from '../../Assets/img/Logo.png';
import CustomizedButton from "../Button/CustomizedButton1";
import Typography from '@material-ui/core/Typography';
import CustomizedButton2 from "../Button/CustomizedButton2";

const useStyles = makeStyles((theme) => ( {
        root: {
            flexGrow: 1,
            marginTop: theme.spacing(2),
        },
        Margin: {
            marginLeft: theme.spacing(5),
            marginTop: theme.spacing(2)
        },
        Margin2: {
            marginTop: theme.spacing(2),
            marginLeft: theme.spacing(5),
        },
        Font: {
            fontFamily: "Segoe UI"
        },
        Img: {
            position: "absolute",
            width: "600px",
            right: 10
        },
        Img2: {
            position: "absolute",
            width: "450px",
            right: 65,
            top: 150
        },
        Text: {
            position: "static",
            padding: theme.spacing(10),
            marginLeft: theme.spacing(14)
        },
        Button: {
            marginRight: "40px"
        }

    }));


function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Toolbar variant="regular">
                <Container maxWidth="xl">
                    <div>
                        <img className={classes.Img} alt="circle" src={circle}/>
                        <img className={classes.Img2} alt="Presentation" src={Presentation}/>
                    </div>
                    <Grid container>
                        <Grid className={classes.Margin} item lg={3}>
                            <img style={{width: "35%"}} alt="Logo" src={Logo}/>
                        </Grid>
                        <Grid className={classes.Margin2} item lg={5}>
                            <Button variant="text" className={classes.Font}>Home</Button>
                            <Button variant="text" className={classes.Font}>Product</Button>
                            <Button variant="text" className={classes.Font}> Services</Button>
                            <Button variant="text" className={classes.Font}>About Us</Button>
                        </Grid>
                        <Grid className={classes.Margin} item lg={2}>
                            <Grid container>
                                <CustomizedButton name="Login"/>
                                <CustomizedButton name="Get a Quote"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
            <div className={classes.Text}>
                <Typography variant="h2">
                    <b>Web Start, Online <br/> success for every <br/> entrepreneur.</b>
                </Typography>
                <br/>
                <br/>
                <Typography variant="h6">
                    we work with power brands owned by leading global <br/> dolor amet, consectetur adipiscing.
                </Typography>
                <br/>
                <br/>
                <div className={classes.Button}>
                    <CustomizedButton2 name="Get Your Estimate"/>
                </div>
            </div>
        </div>
    );
}


export default Header