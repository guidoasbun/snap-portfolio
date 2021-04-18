import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        marginBottom: '20px',
        display: "flex",
        marginLeft: 12,
        marginRight: 12,
        [theme.breakpoints.up("sm")]: {
            marginLeft: 220,
            marginRight: 12,
        },
    },
    title: {
        fontSize: 30,
        color: 'secondary'
    },
    pos: {
        marginTop: 12,
    },
}));

 const AboutMe = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>
                    About Me
                </Typography>
                <Divider/>
                <Typography variant="h5" gutterBottom className={classes.pos}>
                    I am a Computer Science major at Orange Coast College. I have a background in full stack
                    development from the University of California Irvine Coding Boot-Camp. I am passionate about
                    computer programming, and contributing back to the community.
                </Typography>
            </CardContent>

        </Card>
    );
}

export default AboutMe;