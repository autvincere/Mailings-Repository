import React, { useState } from 'react'

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import { ReactComponent as Logo } from '../assets/vmlyr.svg'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import SendIcon from '@material-ui/icons/Send';
import Chip from '@material-ui/core/Chip';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { auth } from '../firebase/firebase.utils'

import { withRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
     paper: {
          width: '50%',
          overflow: 'hidden',
          [theme.breakpoints.down('sm')]: {
               width: '90%',
               marginTop:'160px',
          },
     },
     contentLogo: {
          backgroundColor: '#000000',
          height: '400px',
          width: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          [theme.breakpoints.down('sm')]: {
               width: '100%',
               height: '200px',
          },
     },
     vmlyr: {
          overflow: 'inherit',
          color: '#ffffff',
          fontSize: '4em',
          maxWidth: '400px',
          width: '250px',
          alignItems: 'center',
          justifyContent: 'center'
     },
     contentForm: {
          backgroundColor: '#ffffff',
          height: '400px',
          width: '20vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          [theme.breakpoints.down('sm')]: {
               width: '90%',
          },
     },
     button: {
          marginTop: '20px',
          width: '96%'
     },
     chipError: {
          margin: '6px 0px 9px 32px'
     },
     chipGeneral: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '13px'
     }
}))

const SignIn = (props) => {

     const classes = useStyles();

     const [user, setUser] = useState({
          email: 'aut.vincere@gmail.com'
         ,password: 'prolam2021'
     })
     let { email, password } = user;

     const [errorGeneral, setErrorGeneral] = useState(null)
     const [errorMail, setErrorMail] = useState(null)
     const [ errorPassword, setErrorPassword ] = useState(null)
     const updateStateUser = e => {
          // console.log(e.target.name);
          setUser({
               ...user,
               [e.target.name]: e.target.value
          })
     }

     const submitLogin = (e) => {
          e.preventDefault();
          console.log(email);

          //Validar
          if (!email.trim() || !password.trim()) {
               console.log('ingresa campo');
               setErrorGeneral('Ingrese todos los datos porfavor')
               return
          }
          if (!/\S+@\S+\.\S+/.test(email)) {
               console.log('mail invalido');
               setErrorMail('email invalido')
               return
          } else {
               setErrorMail(null)
          }

          setErrorGeneral(false)
          console.log('Todos los campos son validos');

         

          login()
          // setUser({
          //      email: '',
          //      password: ''
          // })

     }

     const login = async () => {
          try {
               const res = await auth.signInWithEmailAndPassword(email, password)
               console.log(res.user);
               props.history.push('/mails')

          } catch (error) {
               console.log(error);
               if (error.code === 'auth/invalid-email') {
                    errorMail('Email no válido')
                    console.log('Email no válido')
                    return
               }
               if (error.code === 'auth/wrong-password') {
                    setErrorPassword('Constraseña Equivocada')
                    console.log('Constraseña Equivocada')
                    return
               }
          }
     }


     return (
          <Paper elevation={3} className={classes.paper}>
               <Grid container spacing={3}>
                    <Grid spacing={0} sm={6} xs={12} >
                         <Box component="div" className={classes.contentLogo} >
                              <Logo className={classes.vmlyr} />
                         </Box>
                    </Grid>
                    <Grid spacing={0} sm={6} xs={12}>
                         <Box component="div" className={classes.contentForm}>

                              <form
                                   // style={{ width: '600px' }}
                                   onSubmit={submitLogin}>
                                   
                                   <Grid container spacing={1} alignItems="flex-end" fullWidth>
                                        <Grid item>
                                             <AccountCircle />
                                        </Grid>
                                        <Grid item style={{ display: 'flex', flexGrow: '1' }}>
                                             <TextField
                                                  label="Email"
                                                  name="email"
                                                  style={{ width: '90%' }}
                                                  value={email}
                                                  onChange={updateStateUser}
                                                  />
                                        </Grid>
                                        {
                                             errorMail && <Chip
                                                  className={classes.chipError}
                                                  color="secondary"
                                                  label={ errorMail }
                                                  icon={<HighlightOffIcon />}
                                             />
                                        }

                                   </Grid>

                                   <Grid container spacing={1} alignItems="flex-end" >
                                        <Grid item>
                                             <LockIcon />
                                        </Grid>
                                        <Grid item>
                                             <TextField
                                                  label="Password"
                                                  name="password"
                                                  style={{ width: '110%' }}
                                                  value={password}
                                                  onChange={updateStateUser}
                                             />
                                        </Grid>
                                        {
                                             errorPassword && <Chip
                                                  className={classes.chipError}
                                                  color="secondary"
                                                  label={errorPassword}
                                                  icon={<HighlightOffIcon />}
                                             />
                                        }
                                   </Grid>
                                   <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        endIcon={<SendIcon />}
                                        type="submit"
                                   >
                                        Send
                                   </Button>
                                   {
                                             errorGeneral && <Chip
                                                  className={classes.chipGeneral}
                                                  color="secondary"
                                                  label={errorGeneral}
                                             />
                                        }
                              </form>
                         </Box>
                    </Grid>
               </Grid>

          </Paper>
     )
}

export default withRouter(SignIn)
