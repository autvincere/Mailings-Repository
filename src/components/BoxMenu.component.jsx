import React from 'react'
import Listas from './Listas.component'
import {
     makeStyles,
     Drawer,
     Divider
} from '@material-ui/core'

const styles = makeStyles(theme => ({
     drawer: {
          [theme.breakpoints.up('sm')]: {
               width: 240,
               flexShrink: 0,
          },
     },
     drawerPaper: {
          width: 240,
     },
     toolbar: theme.mixins.toolbar,
}))
const BoxMenu = ({ variant, open, onClose }) => {

     const style = styles()

     return (
          <Drawer
               className={style.drawer}
               classes={{
                    paper: style.drawerPaper
               }}
               anchor='left'
               variant={variant}
               open={open}
               onClose={onClose ? onClose : null}
          >
               <div className={style.toolbar}></div>
               <Divider />
               <Listas />
          </Drawer>
     )
}

export default BoxMenu
