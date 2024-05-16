import React from 'react'
import TagFacesIcon from '@mui/icons-material/TagFaces';
import {Mic} from '@mui/icons-material';
import {Box , InputBase , styled } from "@mui/material"
import AttachFileIcon from '@mui/icons-material/AttachFile';




const Container = styled(Box)`
  height: 55px;
  background: #333333;
  display : flex;
  width : 100%;
  align-items: center;
  padding:0 15px;

  & > *{
      margin : 5px;
      color: #000000;
  }
`;


const Search  = styled(Box)`
  background-color: #FFFFFF ;
  border-radius: 18px;
  margin-bottom: 0.5rem;
  width: calc(100% - 100px);
`;

const InputFiled = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left:25px;
    font-size: 14px; 
`;

const ChatFotter = ({sendText , setValue , value}) => {

    return (
   <Container>

    <Search>
        <InputFiled placeholder='Type a message..'
        onChange = {(e) => setValue(e.target.value)}
        onKeyDown= {(e)=>sendText(e)}
        value={value} />
    </Search>
   </Container>
  )
}

export default ChatFotter
