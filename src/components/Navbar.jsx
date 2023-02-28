import React from 'react'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { ProfileCv } from './ProfileCv';
import { ListBlogs } from './ListBlogs';
/* import { SocialN } from './SocialN';
 */

export const Navbar = () => {
  return (
    <div>
      <AppBar sx={{ width: '20%', left: 1, height: '100vh', backgroundColor:'lightgrey'}}>     
        <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: 'darkblue'}}>
          <ProfileCv/>
            <IconButton
              size="medium"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: 'flex', float: 'right' }}
            >
            <MenuIcon />
          </IconButton>
         
        </Toolbar>   

        <ListBlogs/>
        <ListBlogs/>        
        <ListBlogs/>        
        <ListBlogs/>        
             
       {/*  <SocialN/> */}
      </AppBar>
    </div>
  )
}
