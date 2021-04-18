import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import image from '../assets/images/IMG_0879.JPG'

const useStyles = makeStyles((theme) => ({
   root: {
      maxWidth: 345,
   },
   media: {
      height: 215,
      width: 210,
      borderRadius: 20
   },
}));

export default function RecipeReviewCard() {
   const classes = useStyles();

   return (
       <Card className={classes.root}>
          <img src={image} className={classes.media} alt={"Snap Image"}/>
       </Card>
   );
}