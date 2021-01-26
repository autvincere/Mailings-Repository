import React, { useState } from 'react'
import Navbar from './Navbar.component'
import {
     Hidden,
     makeStyles
} from '@material-ui/core'
import BoxMenu from './BoxMenu.component'


const styles = makeStyles( theme => ({
     root: {
          display: 'flex'
     },

}))

const Nav = ({firebaseUser}) => {
     // console.log(props);
     const style = styles();
     const [open, setOpen] = useState(false)

     const handleOpen = () => setOpen(!open)

     return (
          <div className={style.root}>
               <Navbar handleOpen={handleOpen} firebaseUser={firebaseUser}/>

               <Hidden xsDown>
                    <BoxMenu
                         variant="permanent"
                         open={true}
                    />
               </Hidden>

               <Hidden smUp>
                    <BoxMenu
                         variant="temporary"
                         open={open}
                         onClose={handleOpen}
                    />
               </Hidden>

              
          </div>
     )
}

export default Nav
