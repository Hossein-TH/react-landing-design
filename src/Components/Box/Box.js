import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card1 from "../Card/Card1";
import CustomizedButton2 from "../Button/CustomizedButton2";
import seo from "../../Assets/img/Seo.svg";
import analytics from "../../Assets/img/Analytics.svg";
import adwords from "../../Assets/img/Adwords.svg";

const useStyles = makeStyles((theme) => ({
    Box: {
        padding: theme.spacing(15),
        borderRadius: "1%",
        boxShadow: " 0px 2px 12px 0px rgba(173,155,173,0.8)",
        marginTop: "50px",
        backgroundColor: "#fff",
    },
    Text: {
        textAlign: "center",
        marginTop: "-70px"
    },
    Logo: {
        marginTop: "80px",
        padding: theme.spacing(1),
        marginLeft: "32px"
    },
    Button: {
        marginTop: "100px",
        textAlign: "center"
    },
    LogoBox: {
        backgroundColor: "#fff",
        height: "200px",
        textAlign: "center",
        borderRadius: "2%",
        marginTop: "40px",
        marginRight: "15px",
        marginLeft: "15px",
        '&:hover':{
            boxShadow: " 0px 2px 12px 0px rgba(173,155,173,0.8)",
        }
    },
}));


function Box() {
    const classes = useStyles();

    return (
        <div className={classes.Box}>
            <Typography variant="h4" className={classes.Text}>
                <b>Estimate your project Easily</b>
            </Typography>
            <br/>
            <Grid container className={classes.Logo}>
                <Grid item lg={3} className={classes.LogoBox}>
                    <Card1 name="SEO" image={seo}/>
                </Grid>
                <Grid item lg={3} className={classes.LogoBox}>
                    <Card1 name="Analytics" image={analytics}/>
                </Grid>
                <Grid item lg={3} className={classes.LogoBox}>
                    <Card1 name="Google Adwords" image={adwords}/>
                </Grid>
            </Grid>
            <br/>
            <div className={classes.Button}>
                <CustomizedButton2 name="Next"/>
            </div>
        </div>
    )

}

export default Box