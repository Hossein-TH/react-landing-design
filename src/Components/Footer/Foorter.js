import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyle = makeStyles((theme) => ({
    root: {
        background: "linear-gradient(90deg, rgba(137,0,161,1) 0%, rgba(105,3,213,1) 100%);",
        color: "#fff",
        minHeight: "60.5vh",
        backgroundSize: "cover",
        padding: theme.spacing(10),
    },
    Margin: {
        marginLeft: "50px"
    },
    Color: {
        color: "#fff",
        fontFamily: "-apple-system"
    },
    Links: {
        padding: theme.spacing(1),
        marginLeft: "-25px"
    }
}));

function Footer() {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} lg={4}>
                        <Typography variant="h6" className={classes.title}>
                            <b>Information</b>
                        </Typography>
                        <div>
                            <br/>
                            <br/>
                            <Typography>
                                When writing effective testimonials <br/> you can different yourself from competitors.
                            </Typography>
                            <br/>
                            <br/>
                            <Typography variant="h6">
                                <b>09032607598</b>
                            </Typography>
                            <br/>
                            <List>
                                <ListItem>
                                    <ListItemIcon style={{marginLeft: "-20px"}}>
                                        <MailIcon style={{color: "#fff"}}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        style={{marginLeft: "-20px"}}
                                        primary={<Typography variant="body1"> hossein1233897@gmail.com </Typography>}
                                    />

                                </ListItem>
                            </List>
                            <br/>
                            <div className={classes.Links}>
                                <IconButton color="inherit">
                                    <FacebookIcon/>
                                </IconButton>
                                <IconButton color="inherit">
                                    <InstagramIcon/>
                                </IconButton>
                                <IconButton color="inherit">
                                    <PinterestIcon/>
                                </IconButton>
                                <IconButton color="inherit">
                                    <TwitterIcon/>
                                </IconButton>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Typography variant="h6" className={classes.Margin}>
                            <b>About Us</b>
                        </Typography>
                        <div className={classes.Margin}>
                            <List>
                                <ListItem>
                                    <Button>
                                        <ListItemText
                                            className={classes.Color}
                                            primary={<Typography variant="body2">About
                                                us</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button>
                                        <ListItemText
                                            className={classes.Color}
                                            primary={<Typography variant="body2">Our
                                                Services</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button>
                                        <ListItemText
                                            className={classes.Color}
                                            primary={<Typography variant="body2">Contact
                                                Us</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button>
                                        <ListItemText
                                            className={classes.Color}
                                            primary={<Typography variant="body2">Services
                                                & Clients</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button>
                                        <ListItemText
                                            className={classes.Color}
                                            primary={<Typography
                                                variant="body2">Portfolio</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Typography variant="h6" className={classes.title}>
                            <b>Services</b>
                        </Typography>
                        <div>
                            <List>
                                <ListItem>
                                    <Button>
                                        <ListItemText
                                            className={classes.Color}
                                            primary={<Typography variant="body2">Web
                                                Design</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button>
                                        <ListItemText
                                            className={classes.Color}
                                            primary={<Typography
                                                variant="body2">Development</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button>
                                        <ListItemText
                                            className={classes.Color}
                                            primary={<Typography
                                                variant="body2">WordPress</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button>
                                        <ListItemText
                                            className={classes.Color}
                                            primary={<Typography variant="body2">Digital
                                                Marketing</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button>
                                        <ListItemText
                                            className={classes.Color}
                                            primary={<Typography variant="body2">Content
                                                Writing</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button>
                                        <ListItemText
                                            className={classes.Color}
                                            primary={<Typography variant="body2">Online
                                                Promotion</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Divider/>
            <br/>
            <br/>
            <div>
                <Typography variant="h6" style={{textAlign: "center"}}>
                    2019 Copyright All Rights Reserved by TH Company
                </Typography>
            </div>
        </div>
    )
}

export default Footer