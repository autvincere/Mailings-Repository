import React, {Fragment} from 'react'
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { auth } from '../firebase/firebase.utils'

import { withRouter } from 'react-router-dom'

const useStyles = makeStyles( theme => ({
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
     titleWithToolbar: {
          flexGrow: 1,
          marginLeft: '240px',
          [theme.breakpoints.down('sm')]: {
               marginLeft: '0px',
          },
     },
     // titleWithToolbar: {
     //      marginLeft: '240px'
     //      [theme.breakpoints.down('sm')]: {
     //           marginLeft: '0px',
     //      },
     // },
     // appBar: {
     //      [theme.breakpoints.up('sm')]: {
     //           width: `calc(100% - 240px)`,
     //           marginLeft: 240,
     //      },
     // },
     // marginLeft: '240px'
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
                         {
                              firebaseUser !== null
                                   ?    
                                   <Fragment>
                                        <IconButton
                                                  color="inherit"
                                                  aria-label="menu"
                                                  className={style.menuButton}
                                                  onClick={() => handleOpen()}
                                             >
                                             <MenuIcon />
                                        </IconButton>
                                        <Typography variant="h6" color="initial" className={style.titleWithToolbar}>
                                                  Repositorio Mailings
                                        </Typography>
                                   </Fragment>
                                   
                                   :
                                   <Typography variant="h6" color="initial" className={style.title}>
                                   Repositorio Mailings
                              </Typography>
                         }
                       


                         {
                              firebaseUser !== null
                                   ? <Button
                                        variant="text"
                                        color="inherit"
                                        onClick={ () => logOut() }
                                   >
                                        Log Out
                                     </Button>
                                   : <Button variant="text" color="inherit" to="/">
                                        LogIn
                                       {/* <NavLink to="/">LogIn</NavLink> */}
                                        </Button>
                         }
                        
                    </Toolbar>
               </AppBar>
               <div className={style.offset}></div>
          </div>
     )
}

export default withRouter(Navbar)
