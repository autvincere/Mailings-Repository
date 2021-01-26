import React from 'react'
import {
     List,
     ListItemIcon,
     ListItemText,
     Divider,
     ListItem
} from '@material-ui/core'
// import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
// import DashboardIcon from '@material-ui/icons/Dashboard';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import { withRouter } from "react-router-dom";

const Listas = (props) => {
     const { history } = props;
     return (
          <div>
               <List component="nav">

                    <ListItem button onClick={() => history.push("/mails")}>
                         <ListItemIcon>
                              <ArtTrackIcon fontSize="large"/>    
                         </ListItemIcon>
                         <ListItemText primary="Lista de mails"/>
                    </ListItem>

                    {/* <ListItem button>
                         <ListItemIcon>
                              <DashboardIcon fontSize="large" />
                         </ListItemIcon>
                         <ListItemText primary="Mails" />
                    </ListItem>

                    <ListItem button>
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
