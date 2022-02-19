import React from 'react';
import { createStyles, withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BootstrapButton = withStyles({
    root: {
        textTransform: 'none',
        fontSize: 15,
        color: "#6fb8fb",
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        boxShadow: " 0px 4px 21px 0px rgba(212,212,212,0.5)",
        backgroundColor: '#fff',
        borderColor: '#fff',
        '&:hover': {
            backgroundColor: '#fff',
            borderColor: '#fafafa',
            boxShadow: 'none',
        },
    },
})(Button);



const useStyles = makeStyles((theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
        },
    }),
);


function CustomizedButton(props) {
    const classes = useStyles();

    return (
        <div>
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
                {props.name}
            </BootstrapButton>
        </div>
    );
}

export default CustomizedButton