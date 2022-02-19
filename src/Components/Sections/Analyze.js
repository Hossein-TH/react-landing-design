import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import FlightTakeoffRoundedIcon from '@material-ui/icons/FlightTakeoffRounded';
import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import chart from "../../Assets/img/Chart 2.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "250px",
    },
    Image: {
        width: "100%"
    },
    Text: {
        fontFamily: "sans-serif",
        padding: theme.spacing(5)
    }
}));


function Analyze() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container style={{alignItems: "center"}}>
                <Grid container>
                    <Grid item lg={6} className={classes.Text}>
                        <Typography variant="h5">
                            <b>High-end website for an <br/> affordable price.</b>
                        </Typography>
                        <br/>
                        <Typography variant="body1" color="textSecondary">
                            Managing your website yourself is easier than you think.with us no useless option and
                            endless buttons.
                        </Typography>
                        <br/>
                        <Grid container>
                            <Grid item lg={6}>
                                <FlightTakeoffRoundedIcon color="primary" fontSize="large"/>
                                <br/>
                                <Typography variant="h6" color="textPrimary">
                                    <b>Boost your Business</b>
                                </Typography>
                                <br/>
                                <Typography variant="body1" color="textSecondary">
                                    You grow and your website grows this means that you expand.
                                </Typography>
                            </Grid>
                            <Grid item lg={6}>
                                <TrendingUpTwoToneIcon color="secondary" fontSize="large"/>
                                <br/>
                                <Typography variant="h6" color="textPrimary">
                                    <b>Continue the Grow</b>
                                </Typography>
                                <br/>
                                <Typography variant="body1" color="textSecondary">
                                    You grow and your website grows this means that you expand.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <img alt="conversion" src={chart} className={classes.Image}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )

}

export default Analyze