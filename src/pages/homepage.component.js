import React from 'react'
import {
     makeStyles
} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SignIn from '../components/signIn.component';

const useStyles = makeStyles((theme) => ({
     root: {
          flexGrow: 1
     },
     height100: {
          height: '90vh'
     },
     paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
     },
}));

const Homepage = () => {
     const classes = useStyles();
     
     return (
          <div className = {classes.root}>
               <h1>
                    homepage
               </h1>
               <Grid
                 className={classes.height100}
                 container
                 spacing={1}
                 direction="row"
                 justify="center"
                 alignItems="center"
                 alignContent="center"
                 wrap="nowrap"
                 
               >
                  <SignIn />
               </Grid>
          </div>
     )
}

export default Homepage
