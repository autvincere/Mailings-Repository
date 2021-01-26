import React, { useState, useEffect } from 'react'
import { auth } from '../firebase/firebase.utils'

import { makeStyles } from '@material-ui/core'

import { withRouter } from 'react-router'

const styles = makeStyles( theme => ({
     root: {
          display: 'flex'
     },
     toolbar: theme.mixins.toolbar,
     content: {
          flexGrow: 1,
          backgroundColor: theme.palette.background.default,
          padding: theme.spacing(3),
     },
}))


const Mails = (props) => {

     const [user, setUser] = useState(null)
     const style = styles();

     useEffect(() => {
          if (auth.currentUser) {
               console.log('existe un usuario');
               setUser(auth.currentUser)
          } else {
               console.log('No existe el usuario');
               props.history.push('/')
          }
     }, [props.history])


     return (
           <div className = {style.content}>
               <div className={style.toolbar}>
                    <h1>
                         mails
                   </h1>
                    {
                         user && (<h3>{user.email}</h3>)
                    }
                    <p>
                         Aca va el directorio de mails<br/> 
                         nostrum. Accusamus tenetur quos fuga exercitationem dolore ratione earum facere! Dolore veniam nisi dicta sit sunt magnam.
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos veniam reprehenderit, error, amet nobis nam deserunt placeat quas quidem quasi sequi libero quae dolor quaerat, saepe illo autem impedit qui?
                    </p>
              
                </div>
                </div>
     )
}

export default withRouter(Mails)
