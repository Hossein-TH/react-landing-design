import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import CustomizedButton3 from "../Button/CustomizedButton3";
import CustomizedButton2 from "../Button/CustomizedButton2";
import image1 from "../../Assets/img/image 1.jpg";
import image2 from "../../Assets/img/image 2.jpeg";
import image3 from "../../Assets/img/image 3.jpg";
import Card3 from "../Card/Card3";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "250px",
        textAlign: "center",
    },
    Button: {
        padding: theme.spacing(2),
        margin: "0 auto",
        marginTop: "60px",
    },
    Margin: {
        marginTop: "60px"
    }
}));


function PictureCards() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="lg" style={{alignItems: "center"}}>
                <Grid item lg={12}>
                    <Typography variant="h4" color="textPrimary" style={{fontFamily: "Segoe UI"}}>
                        <b>We‘ve completed +2500 amazing <br/> Client Projects</b>
                    </Typography>
                </Grid>
                <Grid item lg={8} container className={classes.Button}>
                    <Grid item lg={3}>
                        <CustomizedButton3  name="Marketing"/>
                    </Grid>
                    <Grid item lg={3}>
                        <CustomizedButton3 name="Design"/>
                    </Grid>
                    <Grid item lg={3}>
                        <CustomizedButton3 name="Development"/>
                    </Grid>
                    <Grid item lg={3}>
                        <CustomizedButton3 name="SEO"/>
                    </Grid>
                </Grid>
                <Grid item lg={12} container className={classes.Margin}>
                    <Grid item lg={4}>
                        <Card3 image={image1} title="Art of Technology"/>
                    </Grid>
                    <Grid item lg={4}>
                        <Card3 image={image2} title="User Centered Design"/>
                    </Grid>
                    <Grid item lg={4}>
                        <Card3 image={image3} title="Extent of Gadgets"/>
                    </Grid>
                </Grid>
                <Grid item lg={12} className={classes.Margin}>
                    <CustomizedButton2 name="View More"/>
                </Grid>
            </Container>
        </div>
    )

}

export default PictureCards