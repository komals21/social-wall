import React  from "react";
import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  display: flex;
  height: 3rem;
  align-items: center;
  cursor: pointer;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 14px",
});

const Conversation = ({ user ,setReceiver }) => {
 
    return (


    <Component   onClick={()=>{
      setReceiver(user.name);
    }} >
      <Box>
        <Box>
          <Typography  >{user.name} </Typography>
        </Box>
      </Box>
    </Component>
  );
};

export default Conversation;
