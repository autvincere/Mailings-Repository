import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import theme from './themeConfig'
import {
  ThemeProvider,
  makeStyles
} from '@material-ui/core/styles'

import Nav from './components/Nav.component';
import Homepage from './pages/homepage.component'
import Mails from './pages/mails.component'
import SubirMail from './pages/subirMail.component'

import { auth } from './firebase/firebase.utils'
// import DownloadFile from './components/DownloadFile';
// import UploadFile from './components/UploadFile.component';

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

const App = () => {
  const [ firebaseUser, setFirebaseUser] = useState(false)
  
  const classes = useStyles();

  useEffect ( () => {
    auth.onAuthStateChanged( user => {
      // console.log(user);
      user ? setFirebaseUser(user) : setFirebaseUser(null)
    })
  }, [])
  
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        
        <Nav firebaseUser={firebaseUser} />
        
        <Switch>
          <Route exact path = '/'
          component = {
            Homepage
          }
          />
          <Route path = '/mails'
          component = {
            Mails
          }
          />
           <Route path = '/subirMail'
          component = {
            SubirMail
          }
          />
          </Switch>
        </div>
      {/* <UploadFile /> */}
      {/* <DownloadFile /> */}
    </ThemeProvider>
  );
}

export default App;
