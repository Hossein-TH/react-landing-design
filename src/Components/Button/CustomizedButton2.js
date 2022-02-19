import React from 'react';
import { createStyles, withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const GreenButton = withStyles({
    root: {
        backgroundColor: "#44c767",
        borderRadius: "3px",
        border: "1px solid #18ab29",
        display: "inline-block",
        cursor: "pointer",
        color: "#ffffff",
        fontFamily: "Arial",
        fontSize: "14px",
        fontWeight: "bold",
        padding: "12px 18px",
        textDecoration: "none",
        width: "200px",
        textShadow: "0px 1px 32px #2f6627",
        },
})(Button);



const useStyles = makeStyles((theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
        },
    }),
);


function CustomizedButton2(props) {
    const classes = useStyles();

    return (
        <div>
            <GreenButton variant="contained" color="primary" disableRipple className={classes.margin}>
                {props.name}
            </GreenButton>
        </div>
    );
}

export default CustomizedButton2