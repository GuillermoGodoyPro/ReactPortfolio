import { 
    Avatar,
    List, ListItem, ListItemAvatar, ListItemText, 

} from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';


export const ListBlogs = () => {
  return (
    <div>
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText
                    /* primary="Brunch this weekend?" */
                    secondary=" — I'll be in your neighborhood doing errands this…"
                    />
            </ListItem>
            <Divider/>
        </List>
    </div>
  )
}


/*
      primary="Brunch this weekend?"
                    secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Ali Connors
                        </Typography>
                         {" — I'll be in your neighborhood doing errands this…"}
        </React.Fragment>
*/ 