import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const GreenButton = withStyles({
    root: {
        backgroundColor: "#fff",
        borderRadius: "30px",
        display: "inline-block",
        cursor: "pointer",
        color: "#00d280",
        fontFamily: "Arial",
        fontSize: "14px",
        padding: "15px",
        textDecoration: "none",
        width: "150px",
        '&:hover': {
            backgroundColor: '#00d280',
            color: "#fff",
            borderColor: '#fff',
            boxShadow: 'none',
        },
        '&:active': {
            backgroundColor: '#00d280',
            color: "#fff",
            borderColor: '#fff',
            boxShadow: 'none',
        },
    },
})(Button);



function CustomizedButton3(props) {

    return (
        <GreenButton variant="contained" disableRipple>
            {props.name}
        </GreenButton>
    );
}

export default CustomizedButton3