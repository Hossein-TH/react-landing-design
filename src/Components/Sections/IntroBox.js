import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Logo1 from "../../Assets/img/l-1.png"
import Logo2 from "../../Assets/img/l-2.png"
import Logo3 from "../../Assets/img/l-3.png"
import Logo4 from "../../Assets/img/l-4.png"
import Logo5 from "../../Assets/img/l-5.png"
import Box from "../Box/Box";

const useStyles = makeStyles((theme) => ({
    Wrap: {
        padding: theme.spacing(5),
    },
    Color: {
        backgroundColor: "#f8fbfd",
        height: "750px",
        marginBottom: "450px"
    },
    Width: {
        width: "15%",
        marginLeft: "30px",
        borderRadius: "5%"
    },
}));


function IntroBox() {
    const classes = useStyles();

    return (
        <div className={classes.Color}>
            <Container maxWidth="md" style={{alignItems: "center"}}>
                <div>
                    <Grid container className={classes.Wrap}>
                        <img className={classes.Width} alt="Logo" src={Logo1}/>
                        <img className={classes.Width} alt="Logo" src={Logo2}/>
                        <img className={classes.Width} alt="Logo" src={Logo3}/>
                        <img className={classes.Width} alt="Logo" src={Logo4}/>
                        <img className={classes.Width} alt="Logo" src={Logo5}/>
                    </Grid>
                </div>
                <div>
                    <Box/>
                </div>
            </Container>
        </div>
    )

}

export default IntroBox