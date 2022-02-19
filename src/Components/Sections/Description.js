import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import conversion from "../../Assets/img/Chart.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "250px",
    },
    Image: {
        width: "100%",
        marginTop: "10px",
    },
    Text: {
        fontFamily: " sans-serif",
        padding: theme.spacing(3)
    }
}));


function Description() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container style={{alignItems: "center"}}>
                <Grid container>
                    <Grid item lg={6}>
                        <img alt="conversion" src={conversion} className={classes.Image}/>
                    </Grid>
                    <Grid item lg={6} className={classes.Text}>
                        <Typography variant="h5">
                            <b>Fully dedicated to finding <br/> the best solutions.</b>
                        </Typography>
                        <br/>
                        <Typography variant="body1" color="textSecondary">
                            Managing your website yourself is easier than you think.with us no useless option and
                            endless buttons.
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="textSecondary">
                            The most important thing an optimized website that is tailored to your wishes. Personal and
                            cared for. You have personal contact throughout the entire process with one of our project
                            coordinators who offer tho right support our designers will also work with a unique design
                            for you And you? You can loan back
                        </Typography>
                        <br/>
                        <Button style={{height: "45px"}} variant="outlined" color="primary">
                            Learn More
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )

}

export default Description