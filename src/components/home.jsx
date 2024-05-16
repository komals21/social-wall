import React, { useState } from "react";
import Navbar from "./navbar.js";
import "./home.css";
import { TextField, styled, Button, Box, Typography } from "@mui/material";
import Favicon from "react-favicon";
import { FaTrash, FaHeart, FaShare, FaRegComment, FaComment } from "react-icons/fa";
import ChatDialog from "./chat/chatDialog.jsx";

const Bpost = styled(Button)({
  backgroundColor: "#3f51b5",
  marginLeft: "auto",
  marginTop: "10px",
  color: "white",
  height: "50px",
  width: "100px",
  "&:hover": {
    backgroundColor: "#303f9f",
  },
});

const Bmessage = styled(Button)({
  position: "fixed",
  bottom: "20px",
  right: "20px",
});

const Bchat = styled(Box)({
    position: "fixed", 
    bottom: "10px",
    right: "20px",
}); 

const Text = styled(Typography)({
  width: "750px",
  wordBreak: "break-word",
  marginBottom: "-15px",
});

const Home = () => {
  const [newPostText, setNewPostText] = useState();
  var id = 9;

  const [showUpdateForm, setShowUpdateForm] = useState({});
  //   const [posts, setPosts] = useState([]);
const [posts, setPosts] = useState([
    { 
      id: 0,
      text: "Just posted a new selfie! #selfie #socialmedia",
      comments: ["hello bhai"]
    },
    { 
      id: 1,
      text: "Feeling excited about my new blog post! Check it out: www.example.com #blogging #socialmedia",
      comments: []
    },
    { 
      id: 2,
      text: "Had a great time at the social media conference today! #networking #socialmedia",
      comments: []
    },
    { 
      id: 3,
      text: "Can't wait to share my latest project with you all! Stay tuned! #socialmedia #project",
      comments: []
    },
    { 
      id: 4,
      text: "Celebrating 10k followers! Thank you all for your support! #milestone #socialmedia",
      comments: []
    },
    { 
      id: 5,
      text: "Join me live on Instagram tomorrow at 8 PM for a Q&A session! #livestream #socialmedia",
      comments: []
    },
    { 
      id: 6,
      text: "Just launched my new YouTube channel! Subscribe for weekly videos! #youtube #socialmedia",
      comments: []
    },
    { 
      id: 7,
      text: "Sharing some tips and tricks for social media marketing on my blog today. #marketing #socialmedia",
      comments: []
    },
    { 
      id: 8,
      text: "Excited to announce my collaboration with a popular influencer! #collaboration #socialmedia",
      comments: []
    },
    { 
      id: 9,
      text: "Reflecting on the power of social media in connecting people from all over the world. #socialmedia #connection",
      comments: []
    }
]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [newcomment, setNewComment] = useState();

  const postHandler = () => {
    if (newPostText) {
    setPosts([{id: ++id, text: newPostText,comments:[]}, ...posts]);
    }

    setNewPostText("");
  };

  const removePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };
  const addComment = (id , newcomment) => {
    const updatedPosts = [...posts];
    const index = updatedPosts.findIndex(post => post.id === id);
    updatedPosts[index].comments.push(newcomment);
    setPosts(updatedPosts);
    setNewComment("");
  };
  const [message1 , setMessage1 ] = useState([
    { id: 1, text: "Hello", sender: "Ram" },
    { id: 1, text: "How are you?", sender: "Ram" },
    { id: 0, text: "I'm good, thanks!, Ram", sender: "You" },
    { id: 0, text: "What about you?", sender: "You" },
    { id: 1, text: "Nice weather today", sender: "Ram" },
    { id: 0, text: "Yes, it's beautiful", sender: "You" },
    { id: 1, text: "Do you have any plans for the weekend?", sender: "Ram" },
    { id: 0, text: "Not yet, how about you?", sender: "You" },
    { id: 1, text: "I'm thinking of going hiking", sender: "Ram" },
    { id: 0, text: "That sounds fun! Enjoy your hike", sender: "You" },
    { id: 1, text: "Thanks! I will", sender: "Ram" },
    { id: 0, text: "You're welcome", sender: "You" },
  ]);

  const [message2 , setMessage2 ] = useState([
    { id: 1, text: "Hello Bhai", sender: "Shyaam" },
    { id: 1, text: "kya chal raha hai ", sender: "Shyaam" },
    { id: 0, text: "kuch nahi, Shyaam", sender: "You" },
    { id: 0, text: "What about you? ", sender: "You" },
    { id: 1, text: "Bas yahi, bore ho raha hu", sender: "Shyaam" },
    { id: 0, text: "Kuch kaam kar lo", sender: "You" },
    { id: 1, text: "Haan, soch raha hu", sender: "Shyaam" },
    { id: 0, text: "Theek hai, Shyaam", sender: "You" },
    { id: 1, text: "Ok, bye", sender: "Shyaam" },
    { id: 0, text: "Bye", sender: "You" },
  ]);
  const [message3 , setMessage3 ] = useState([
    { id: 1, text: "Hello bro", sender: "Alice" },
    { id: 1, text: "Whats Up ?", sender: "Alice" },
    { id: 0, text: "I'm good, thanks! , Alice", sender: "You" },
    { id: 0, text: "What about you?", sender: "You" },
    { id: 1, text: "I'm good too", sender: "Alice" },
    { id: 0, text: "That's great", sender: "You" },
    { id: 1, text: "Do you have any plans for the weekend?", sender: "Alice" },
    { id: 0, text: "Not yet, how about you?", sender: "You" },
    { id: 1, text: "I'm thinking of going hiking", sender: "Alice" },
    { id: 0, text: "That sounds fun! Enjoy your hike", sender: "You" },
    { id: 1, text: "Thanks! I will", sender: "Alice" },
    { id: 0, text: "You're welcome", sender: "You" },
  ]);


  return (
    <>
      <Navbar />
      <Box className="home1">
        <div className="home">
          <div className="post-container">
            <h2 className="heading">New Post</h2>
            <div className="textarea-container">
              <textarea
                placeholder="Share your thoughts..."
                className="post"
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                style={{
                  width: "500px",
                  height: "100px",
                  backgroundColor: "black",
                  color: "white",
                  resize: "none",
                  padding: "10px",
                }}
              />
              <Bpost onClick={postHandler} variant="contained" color="primary">
                Post
              </Bpost>
            </div>
          </div>
        </div>
        <Box className="allPosts">
          {posts.reverse().map((post, index) => (
            <div key={index} className="post-box">
              <Text>{post.text}</Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <button
                className="delete"
                id="delete"
                onClick={() => removePost(index)}
              >
                <FaTrash />
              </button>

              <button
                className="comment"
                id="comment"
                
                onClick={() =>{ if(!showUpdateForm[post.id]) {setShowUpdateForm(prevState => ({ ...prevState, [post.id]: true }) )}} }
              >
                <FaComment />
              </button>
              <button className="like">
                <FaHeart />
              </button>
              <button className="share">
                <FaShare />
              </button>
              {showUpdateForm[post.id] && (
                            <div>
                                <Text>
                                <h5>Comments Section</h5>
                                <hr />
                                <input type="text" value={newcomment}  onChange={(e) => setNewComment(e.target.value)} 
                                placeholder="Add a comment" />&nbsp;&nbsp;&nbsp; 
                                <button onClick={() => addComment(post.id , newcomment)}>Add Comment</button> &nbsp;&nbsp;&nbsp;<button onClick={() => setShowUpdateForm(prevState => ({ ...prevState, [post.id]: false }))}>Close Comments</button>
                                {post.comments.map((comment, index) => (
                                    <div key={index}>{comment}</div>
                                ))}
                                <hr />
                                </Text>
                            </div>
                        ) }
            </div>
          ))}
        </Box>

        <Bmessage
          onClick={() => {
            setIsChatOpen(!isChatOpen);
          }}
          variant="contained"
          color="primary"
        >

          
          Messages
        </Bmessage>
      </Box>
      <Bchat>
      {isChatOpen && <ChatDialog message1={message1} setMessage1={setMessage1} message2={message2} setMessage2={setMessage2} message3={message3} setMessage3={setMessage3}  isChatOpen = {isChatOpen} setIsChatOpen={setIsChatOpen} />}
      </Bchat>
    </>
  );
};

export default Home;
