import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ChatFotter from "./ChatFotter";
import { Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";
import Message from "./Message.jsx";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;
const Component1 = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 3px 2rem;
`;

const Header = styled(Box)`
  height: 2.75rem;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  objectFit: "cover",
  borderRadius: "50%",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
`;

const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgb(0, 0, 0, 0.6);
`;

const RightContainer = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 8px;
    font-size: 26px;
    color: #000;
  }
`;

const ChatBox = () => {
  const person = "Alice";
  // const [conversation , setConversation] = useState({});
  const [messages, setMessages] = useState();

  if (person === "Alice") {
    const message = [
      { id: 1, text: "Hello", sender: "Alice" },
      { id: 1, text: "How are you?", sender: "Alice" },
      { id: 0, text: "I'm good, thanks!", sender: "You" },
      { id: 0, text: "What about you?", sender: "You" },
    ];
    setMessages(message);
  }
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
      setMessages([...messages, temp]);
      setValue("");
      // setFlag(prev => !prev);
    }
  };

  return (
    <Box>
      {/* chat header */}
      <Header>
        {/* <Image src={person.picture} alt="dp" /> */}
        <Box>
          <Name> {person} </Name>
          <Status> Offline</Status>
        </Box>

        <RightContainer>
          <Search />
          <MoreVert />
        </RightContainer>
      </Header>
      {/* chat messages */}

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
    </Box>
  );
};

export default ChatBox;
