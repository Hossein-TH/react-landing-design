import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
    },
    media: {
        height: 400,
    },
    Text: {
        textAlign: "left"
    }
}));

export default function Card3(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="image"
                />
            </CardActionArea>
            <CardActions>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item lg={8}>
                            <Typography variant="body1" color="primary" className={classes.Text}>
                                <b>{props.title}</b>
                            </Typography>
                        </Grid>
                        <Grid item lg={4}>
                            <Button variant="outlined" color="default">
                                <ArrowRightAltIcon fontSize="small" color="primary"/>
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </CardActions>
        </Card>
    );
}
