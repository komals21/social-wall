import React, { useState } from 'react'
import  {Box} from '@mui/material'
import Search from './Search.jsx'
import Conversations from './Conversations.jsx'


const Menu = ({setReceiver}) => {
   const  [text , setText] = useState("");

  return (
    <Box>
      
      <Search setText={setText}/>
      <Conversations text = {text} setReceiver = {setReceiver}/>
    </Box>
  )
}

export default Menu
