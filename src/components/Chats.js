import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react';
import styled from 'styled-components';
import { SearchContainer, SearchInput } from './LeftBar';
import { messagesList } from '../demoData';

const Container = styled.div`
  ck;display: flex;
  flex-direction: column;
  flex: 3;
  height: 100%;
  width: 100%;
  background: #ebe7e7f8;
`;
const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
  align-items: center;
  gap:20px
`;
const Dp = styled.img`
    width:35px;
    height:35px;
    border-radius:50%;
`;
const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  background: #f0f0f0;
  padding: 10px;
  align-items: center;
  bottom: 0;
`;
const EmojiImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  opacity: 0.4;
  cursor: pointer;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  background: #e5ddd6;
  background-image: url("../image/chat-background.png");
`;
const MessageDiv = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  margin: 5px 15px;
`;
const Message = styled.div`
  background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
  padding: 8px 10px;
  border-radius: 4px;
  max-width: 50%;
  color: #303030;
  font-size: 14px;
`;
const Impjimage = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
  display: flex;
  fles
`;


const Chats = (props) => {
  const selectedChat = props.selectedChat;
  const [text, setText] = useState("");
  const [pickeVisable, togglePicker] = useState(false);
  const [message, SetMessageList] = useState(messagesList);

  const onEnter = (event) => {
    // console.log("its clicked")
    if (event.key === "Enter") {
      const newMessages = [...message];
      newMessages.push({
        id: 0,
        messageType: "TEXT",
        text,
        senderID: 0,
        addedOn: "12:00 PM",
      });
      newMessages.push({
        id: 0,
        messageType: "TEXT",
        text: "unable to connect with Database!!",
        senderID: 1,
        addedOn: "00",
      })
      SetMessageList(newMessages);
      setText("");
    }
  };

  function updateMssg() {
    const newMessages = [...message];
    newMessages.push({
      id: 0,
      messageType: "TEXT",
      text,
      senderID: 0,
      addedOn: "12:00 PM",
    });
    newMessages.push({
      id: 0,
      messageType: "TEXT",
      text: "unable to connect with Database!!",
      senderID: 1,
      addedOn: "00",
    })
    SetMessageList(newMessages);
    setText("");

  }



  return (
    <Container>
      <ProfileHeader>
        <Dp src={selectedChat.profilePic} />
        {selectedChat.name}
      </ProfileHeader>
      <MessageContainer>
        {message.map((data) => {
          return (
            <MessageDiv isYours={data.senderID === 0}>
              <Message isYours={data.senderID === 0}>{data.text}</Message>
            </MessageDiv>
          )
        })}

      </MessageContainer>
      <ChatBox>
        <SearchContainer>

          {pickeVisable && (
            <div style={{ height: 50, width: "80px", position: "absolute" ,top:"110px" }}>
            <EmojiPicker className="emoji"
              onEmojiClick={(emoji) => {
                setText(text + emoji.emoji);
                togglePicker(false);
              }}
            /></div>)}
          <EmojiImage src="../image/emoji.svg"
            onClick={() => togglePicker(!pickeVisable)} />
          <SearchInput placeholder='Type a message' onKeyDown={onEnter}
            value={text} onChange={(e) => setText(e.target.value)} />

          <button onClick={updateMssg}><Impjimage src='../image/enter.png' /></button>
        </SearchContainer>
      </ChatBox>
    </Container>
  )
}

export default Chats;
