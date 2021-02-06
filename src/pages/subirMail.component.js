import React, {
     useEffect,
     useState
} from 'react'
import { auth } from '../firebase/firebase.utils'

import { makeStyles, Fab } from '@material-ui/core'
import AddIcon from "@material-ui/icons/Add";
import TextField from '@material-ui/core/TextField';
// import FormControl from '@material-ui/core/FormControl';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
import ImageThumb from '../components/imageThumb.component'

import { withRouter } from 'react-router'

const centeredStyleObj = {
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center'
}

const useStyles = makeStyles( theme => ({
     root: {
          display: 'flex'
     },
     toolbar: theme.mixins.toolbar,
     content: {
          ...centeredStyleObj,
          height: '100vh',
          flexWrap: 'wrap',
          flexDirection:'row',
          flexGrow: 1,
          marginTop: '30px',
          padding: theme.spacing(3),
     },
     form:{
          padding: '1px',
          "& div, label": {
               width: '90%',
               marginBottom: '20px'    
          }
          
     }
     // textField: {
     //      // width: '90%',
     //      // marginBottom: '20px' 
     // }
}))

const SubirMail = (props) => {
     // console.log(props);
     const classes = useStyles();
     const [ file, setFile ] = useState()

     const [ datosMail, setDatosMail ] = useState({
          nombre: '',
          marca: '',
          miniatura: '',
          descripcion: ''
     })

     const handleUpdateState = e => {
          // console.log(e.target.name);

          setDatosMail({
               ...datosMail,
               [e.target.name]: e.target.value
          })

     }

     const handleUploadFile = e => {
          if (e.target.files[0]) {
               setFile(
                    e.target.files[0]
               )
               console.log( e.target.files[0]);
          }
         
     }

     useEffect(() => {
          if (auth.currentUser) {
               console.log('existe usuario');
               // setUser(auth.currentUser)
          } else {
               console.log('No existe el usuario');
               props.history.push('/')
          }
     }, [props.history])

     return (
          <div className = {classes.root}>
                  <h1>
                         Subir mails
               </h1>
        
          <div className = {classes.content}>
               {/* <div className={classes.toolbar}> */}
               {/* <FormControl >
                         <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                         <OutlinedInput
                         id="outlined-adornment-amount"
                                   labelWidth={40}
                              />
                               </FormControl> */}

                    <form noValidate autoComplete="off" className = {classes.form}>
                       
                         <TextField
                              onChange={handleUpdateState}
                              className={classes.textField}
                              label="Nombre"
                              variant="outlined"
                         />

                         <TextField
                              fullWidth
                              onChange={handleUpdateState}
                              label="Marca"
                              variant="outlined"
                         />
                         <div>
                        <label htmlFor="upload-photo">
                              <input
                                   onChange={handleUploadFile}
                                   style={{ display: "none" }}
                                   id="upload-photo"
                                   name="upload-photo"
                                   type="file"
                              />
                              <Fab
                                   color="secondary"
                                   size="small"
                                   component="span"
                                   aria-label="add"
                                   variant="extended"
                              >
                                   <AddIcon /> Subir miniatura
                              </Fab>
                         </label>
                         </div>

                         <TextField
                              fullWidth
                              label="descripcion"
                              variant="outlined"
                              />
                              
                    </form>
                    
                    <div
                         // style={{ backgroundColor: 'red', height: '500px', width: '300px' }}
                    >
                         <ImageThumb image={file} />
                         {/* {
                              file ? <ImageThumb image={file} />
                                   : <ImageThumb />
                         } */}
                    </div>
          
               </div>
         </div>
     )
}

export default withRouter(SubirMail)
