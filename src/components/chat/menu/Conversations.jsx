import React, { useState } from 'react'

import {Box , styled , Divider} from "@mui/material"
import Conversation from './Conversation';




const Component  =styled(Box)`
height:81vh;
overflow: overlay;

`;

const StyledDivider = styled(Divider)`
        margin: 0 0 0 70px;
        background : #e9edef;
        opacity: .6;
`;



const Conversations = ({text , setReceiver }) => {

    
    //  const {isAuth} = useContext(Context);
    
    const [users, setUsers] = useState([
        { id: 1, name: 'Ram' },
        { id: 2, name: 'Shyaam' },
        { id: 3, name: 'Alice' },
    ]);
  
    
    let filteredUsers = users.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
    if(text === "") filteredUsers = users;


    return (
        <Component>
            {
                filteredUsers.map(user =>(   
                    <>  
                    <Conversation user = {user} setReceiver = {setReceiver} />
                    <StyledDivider/>
                    </>
                  
 
                ))

            }
        </Component>
  )
}

export default Conversations
