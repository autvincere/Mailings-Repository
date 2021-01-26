import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { auth } from '../firebase/firebase.utils'

import { NavLink,withRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
     offset: theme.mixins.toolbar,
     menuButton: {
          marginRight: theme.spacing(2),
          [theme.breakpoints.up('sm')]: {
               display: 'none',
          },
     },
     title: {
          flexGrow: 1
     },
     appBar: {
          [theme.breakpoints.up('sm')]: {
               width: `calc(100% - 240px)`,
               marginLeft: 240,
          },
     },
}))

const Navbar = (props) => {
     // console.log(props);
     const { handleOpen, firebaseUser, history } = props

     const logOut = () => {
          auth.signOut()
               .then (() => {
                   history.push(`/`)
               })    
     }

     const style = useStyles()
     return (
          <div>
               <AppBar className={style.appBar}>
                    <Toolbar>
                         <IconButton
                              color="inherit"
                              aria-label="menu"
                              className={style.menuButton}
                              onClick={() => handleOpen()}
                         >
                              <MenuIcon />
                         </IconButton>

                         <Typography variant="h6" color="initial" className={style.title}>
                              Repositorio Mailings
                         </Typography>

                         {
                              firebaseUser !== null
                                   ? <Button
                                        variant="text"
                                        color="inherit"
                                        onClick={ () => logOut() }
                                   >
                                        Log Out
                                     </Button>
                                   : <Button variant="text" color="inherit">
                                       <NavLink to="/">LogIn</NavLink>
                                        </Button>
                         }
                        
                    </Toolbar>
               </AppBar>
               <div className={style.offset}></div>
          </div>
     )
}

export default withRouter(Navbar)
