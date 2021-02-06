import React from 'react'
import {
     List,
     ListItemIcon,
     ListItemText,
     Divider,
     ListItem
} from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard';
// import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
// import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import PublishIcon from '@material-ui/icons/Publish';
import { withRouter } from "react-router-dom";

const Listas = (props) => {
     const { history } = props;
     return (
          <div>
               <List component="nav">

                    <ListItem button onClick={() => history.push("/mails")}>
                         <ListItemIcon>
                              <DashboardIcon fontSize="large" />
                         </ListItemIcon>
                         <ListItemText primary="Lista de mails" />
                    </ListItem>

                    <ListItem button onClick={() => history.push("/subirMail")}>
                         <ListItemIcon>
                              <PublishIcon fontSize="large" />
                         </ListItemIcon>
                         <ListItemText primary="Subir nuevo mail" />
                    </ListItem>

                    {/* <ListItem button>
                         <ListItemIcon>
                              <DeveloperBoardIcon fontSize="large" />
                         </ListItemIcon>
                         <ListItemText primary="Mails" />
                    </ListItem> */}

                    <Divider />

               </List>
          </div>
     )
}

export default withRouter(Listas)
