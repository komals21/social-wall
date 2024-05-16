import React, { useState } from "react";
import {
    ThemeProvider,
    createTheme
  } from "@mui/material/styles";
import { MoreVert } from "@mui/icons-material";
import {Menu, MenuItem , styled}  from "@mui/material";


const MenuOption  = styled(MenuItem)`

   font-size: 14px;
   padding: 10px 60px  5px 24px;
   color: #4A4A4A;
`;

const MoreV = styled(MoreVert)`

    color: #ffffff;
`;


const HeaderMenu = ({setOpenDrawer}) => {
    const [open , setOpen] = useState(null);


    const handleClose = () =>{
            setOpen(null);
    }
    const handleClick = (e) =>{
        setOpen(e.currentTarget);
    }

  return (
    <>
      <MoreV onClick={handleClick}/>
      <Menu
    
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1 = {null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuOption onClick={()=>{handleClose()}}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>Notification</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
