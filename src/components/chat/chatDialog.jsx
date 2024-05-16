import React, { useEffect, useState } from "react";
import { Dialog, Box, styled, Button } from "@mui/material";
import Menu from "./menu/Menu";
import Emptychat from "./chatContent/Emptychat";
import ChatBox from "./chatContent/ChatBox";
import Message from "./chatContent/Message";
import ChatFotter from "./chatContent/ChatFotter";

const Component = styled(Box)`
  display: flex;
  height: 80vh;
`;
const Component1 = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;
const Wrapper = styled(Box)`
  background-image: url(${"https://imgs.search.brave.com/DC2ePJbiwbKIdEvZGg-59sIjpF_rVHzWg2OggqBGN8E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Nzg2NjI5OTY0NDIt/NDhmNjAxMDNmYzk2/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4bGVI/QnNiM0psTFdabFpX/UjhNVFo4Zkh4bGJu/d3dmSHg4Zkh3PQ"});
`;

const Container = styled(Box)`
  padding: 3px 2rem;
`;

const dialogStyle = {
  height: "50%",
  width: "50%",
  position: "absolute",
  bottom: "0",
  right: "0",
};

const LeftComponent = styled(Box)`
width: 30%;  
min-width: 1rem;
`;

const RightComponent = styled(Box)`
  width: 70%;
  min-width: 1rem;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const ChatDialog = ({ isChatOpen, setIsChatOpen  , message1 , setMessage1 ,  setMessage2, setMessage3 , message2 , message3}) => {
  const [open, setOpen] = useState(true);
  const [receiver, setReceiver] = useState(null);
  
  
  const [messages, setMessages] = useState();


  
  useEffect(() => {
    if (receiver === "Ram") {
      
      setMessages(message1);
      console.log(messages);
    } else if (receiver === "Shyaam") {
     
      setMessages(message2);
      console.log(messages);

    } else if (receiver === "Alice") {
      
      setMessages(message3);
    }
  



  }, [receiver , message1 , message2 , message3]);
  



  
  const toggleChat = () => {
    setOpen(!open);
    setIsChatOpen(!isChatOpen);
  };


  const [value, setValue] = useState("");
  
  
  const sendText = async (e) => {
    console.log(e);
    const code = e.keyCode || e.which;
    if (code === 13) {
      let temp = {
        id: 0,
        text: value,
        sender: "You",
      };
      if(receiver === "Ram"){
        setMessage1([...message1, temp]);
      }
      else if(receiver === "Shyaam"){
        setMessage2([...message2, temp]);
      }
      else if(receiver === "Alice"){
        setMessage3([...message3, temp]);
      }
      
      setValue("");
      // setFlag(prev => !prev);
    }
  };



  return (
    <>
      <Dialog
        open={open}
        PaperProps={{ sx: dialogStyle }}
        hideBackdrop={false}
        maxWidth={"md"}
      >
        <Button
          style={{ backgroundColor: "#3f51b5" , color: "white", fontSize: "0.8rem" }}
          onClick={toggleChat}
        >
          Close Chat
        </Button>
        <Component>
          <LeftComponent>
            <Menu setReceiver={setReceiver} />
          </LeftComponent>

          <RightComponent>

            <Wrapper>
              <Component1>
                {messages &&
                  messages.map((message) => (
                    <Container>
                      <Message message={message} />
                    </Container>
                  ))}
              </Component1>
              <ChatFotter sendText={sendText} setValue={setValue} value={value} />
            </Wrapper>
          </RightComponent>
        </Component>
      </Dialog>
    </>
  );
};

export default ChatDialog;
