import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import comment from "../../Assets/img/Comment.svg";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CustomizedButton2 from "../Button/CustomizedButton2";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "250px",
    },
    Image: {
        width: "100%"
    },
    Padding: {
        paddingLeft: theme.spacing(10),
    },
    Paragraph: {
        textDecoration: "underline",
        color: "blue"
    }
}));


function Comment() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Grid container style={{alignItems: "center"}}>
                    <Grid item lg={6}>
                        <img alt="conversion" src={comment} className={classes.Image}/>
                    </Grid>
                    <Grid item lg={6} className={classes.Padding}>
                        <Typography variant="h4">
                            <b> Consult our experts about your <br/> project for free</b>
                        </Typography>
                        <br/>
                        <Typography variant="body1" color="textSecondary">
                            Managing your website yourself is easier than you think.with us no useless option and
                            endless buttons.
                        </Typography>
                        <br/>
                        <Grid container>
                            <Grid item lg={6}>
                                <TextField label="Name" variant="outlined" size="medium"/>
                            </Grid>
                            <Grid item lg={6}>
                                <TextField color="secondary" type="url" label="Website Link" variant="outlined" size="medium"/>
                            </Grid>
                        </Grid>
                        <br/>
                        <div>
                            <Grid item lg={12}>
                                <TextField fullWidth label="Email" variant="outlined" size="medium"/>
                            </Grid>
                        </div>
                        <br/>
                        <div>
                            <Grid item lg={12}>
                                <TextField type="text" fullWidth placeholder="Write a Message" label="Message" variant="outlined"
                                           size="medium" multiline rows={4} />
                            </Grid>
                        </div>
                        <br/>
                        <Grid>
                            <Typography variant="body2" component={'span'} color="textSecondary">
                                <InputAdornment position="start">
                                    <VerifiedUserIcon color="primary" fontSize="small"/>
                                    &nbsp; You agree with &nbsp; <p className={classes.Paragraph}>Terms of Service</p> &nbsp; & &nbsp; <p className={classes.Paragraph}>Privacy
                                    Policy</p>
                                </InputAdornment>
                            </Typography>
                        </Grid>
                        <br/>
                        <br/>
                        <CustomizedButton2 name="View More" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )

}

export default Comment