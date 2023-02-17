import React, { useState } from 'react'
// import '../styles/App.css';
import "./styles/App.css"
import Chats from "./components/Chats"
import styled from 'styled-components';
import ContactList from './components/LeftBar';

const Placeholder = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 10px;
  color: rgba(0, 0, 0, 0.45);

  span {
    font-size: 32px;
    color: #525252;
  }
`;
const ChatPlaceholder = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: contain;
`;

const App = () => {
    const [selectedChat, setChat]=useState();

  return (
    <div className='app'>
      <ContactList setChat={setChat}/>
      {selectedChat?<Chats selectedChat={selectedChat}/>:<Placeholder>
        <ChatPlaceholder src="../image/welcome-placeholder.jpeg"/>
        <span>WhatsApp Web</span>
          WhatsApp connects to your phone to sync messages.
        </Placeholder>}
    </div>
  )
}


export default App;
