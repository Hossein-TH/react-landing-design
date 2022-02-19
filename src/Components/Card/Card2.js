import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import seo from "../../Assets/img/Seo.svg";
import analytics from "../../Assets/img/Analytics.svg";
import adwords from "../../Assets/img/Adwords.svg";
import conversion from "../../Assets/img/Conversation.svg";

const useStyles = makeStyles((theme) => ({
    media: {
        width: "100%",
        height: "150px",
    },
    LogoShadowBox: {
        padding: theme.spacing(2),
        borderRadius: "2%",
        marginLeft: "20px",
        '&:hover': {
            boxShadow: "0px 2px 12px 3px rgba(201,201,201,0.28)",
        },
    },
    Button: {
        '&:hover': {
            color: "#1976d2"
        },
    },
    Text: {
        fontFamily: "sans-serif",
        padding: theme.spacing(1)
    },
}));

export default function Card2() {
    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item lg={3}>
                    <div className={classes.LogoShadowBox}>
                        <img alt="Logo" className={classes.media} src={seo}/>
                        <br/>
                        <br/>
                        <Divider/>
                        <Typography variant="h6" color="textPrimary">
                            <b>SEO</b>
                        </Typography>
                        <br/>
                        <Typography variant="subtitle2" color="textSecondary">
                            A complete about-face in its economy Amsterdams
                        </Typography>
                        <br/>
                        <Button className={classes.Button}>
                            <Typography variant="subtitle2" className={classes.Text}>
                                Explore More
                            </Typography>
                        </Button>
                    </div>
                </Grid>
                <Grid item lg={3}>
                    <div className={classes.LogoShadowBox}>
                        <img alt="Logo" className={classes.media} src={analytics}/>
                        <br/>
                        <br/>
                        <Divider/>
                        <Typography variant="h6" color="textPrimary">
                            <b>Analytics</b>
                        </Typography>
                        <br/>
                        <Typography variant="subtitle2" color="textSecondary">
                            A complete about-face in its economy Amsterdams
                        </Typography>
                        <br/>
                        <Button color="primary">
                            <Typography variant="subtitle2" className={classes.Text}>
                                Explore More
                            </Typography>
                        </Button>
                    </div>
                </Grid>
                <Grid item lg={3}>
                    <div className={classes.LogoShadowBox}>
                        <img alt="Logo" className={classes.media} src={adwords}/>
                        <br/>
                        <br/>
                        <Divider/>
                        <Typography variant="h6" color="textPrimary">
                            <b>Google Adwords</b>
                        </Typography>
                        <br/>
                        <Typography variant="subtitle2" color="textSecondary">
                            A complete about-face in its economy Amsterdams
                        </Typography>
                        <br/>
                        <Button className={classes.Button}>
                            <Typography variant="subtitle2" className={classes.Text}>
                                Explore More
                            </Typography>
                        </Button>
                    </div>
                </Grid>
                <Grid item lg={3}>
                    <div className={classes.LogoShadowBox}>
                        <img alt="Logo" className={classes.media} src={conversion}/>
                        <br/>
                        <br/>
                        <Divider/>
                        <Typography variant="h6" color="textPrimary">
                            <b> Conversion Option</b>
                        </Typography>
                        <br/>
                        <Typography variant="subtitle2" color="textSecondary">
                            A complete about-face in its economy Amsterdams
                        </Typography>
                        <br/>
                        <Button className={classes.Button}>
                            <Typography variant="subtitle2" className={classes.Text}>
                                Explore More
                            </Typography>
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
