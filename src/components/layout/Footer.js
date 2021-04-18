import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';


import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import theme from "../theme/theme";

const useStyles = makeStyles((theme) => ({
   root: {
      width: '90%',
      marginBottom: '0px',
      display: "flex",
      alignItems: "start",
      marginLeft: 12,
      marginRight: 12,
      [theme.breakpoints.up("sm")]: {
         marginLeft: 220,
         marginRight: 20,
      },
      position: "fixed",
      bottom: 0,
      background: '#FFFC00'
   },
}));

export default function LabelBottomNavigation() {
   const classes = useStyles();
   const [value, setValue] = React.useState('recents');

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
       <div>
       <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
         <h1>Hello</h1>
       </BottomNavigation>
      </div>
   );
}