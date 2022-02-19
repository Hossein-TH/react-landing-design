import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
    media: {
        width: "100px",
    },
}));

export default function Card1(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
                <img alt="Logo" className={classes.media} src={props.image}/>
                <br/>
                <br/>
                <Divider/>
                <br/>
                <Typography>
                    {props.name}
                </Typography>
        </div>
    );
}
