import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Card2 from "../Card/Card2";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "250px",
        textAlign: "center",
    },
    Wrap: {
        padding: theme.spacing(5),
        display: "flex",
        justifyContent: "center"
    },
    Text: {
        fontFamily: "sans-serif"
    },
}));


function ExploreCards() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="lg" style={{alignItems: "center"}}>
                <div>
                    <Typography variant="h4" className={classes.Text}>
                        <b>We offer the full range of <br/> quality services</b>
                    </Typography>
                    <br/>
                    <br/>
                    <Grid container className={classes.Wrap}>
                    <Card2/>
                    </Grid>
                </div>
            </Container>
        </div>
    )

}

export default ExploreCards