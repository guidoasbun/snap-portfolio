import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from '@material-ui/core/colors';

import image from '../assets/images/IMG_0879.JPG'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(23),
    height: theme.spacing(23),
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    height: theme.spacing(23),
    width: theme.spacing(23),
  },
}));

const ProfileImage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar
        alt="Guido Asbun"
        src={image}
        className={classes.square}
      />

    </div>
  );
};

export default ProfileImage;
