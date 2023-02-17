import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  background: white;
  cursor: pointer;
  padding: 15px 0px;

  :hover {
    background: #ebebeb;
  }
`;

const Dp = styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 12px;
`;
const ContactName = styled.span`
  width: 100%;
  font-size: 16px;
  color: black;
`;
const MessageText = styled.span`
  width: 100%;
  font-size: 14px;
  margin-top: 3px;
  color: rgba(0, 0, 0, 0.8);
`;
const MessageTime = styled.span`
  font-size: 12px;
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.70);
  white-space: nowrap;
  padding-right: 10px;
`;
const Count = styled.div`
 background:#00FF00;
 height:20px;
 color:black;
 width:20px;
 border-radius:50%;
 text-align:center;
border:1px solid black;
margin-left:3px;
`;


const ContactComponent = (props) => {
  const userData=props.userData;
  const setChat=props.setChat;
  const [click,setclick]=useState(true);
  
  return (
    <ContactItem onClick={()=>{setChat(userData)
      setclick(false)}}>
        <Dp src={userData.profilePic} />
        <ContactInfo>
          <ContactName>{userData.name} </ContactName>
          <MessageText>{userData?.lastText}</MessageText>
        </ContactInfo>
        <MessageTime>{userData?.lastTextTime}{click?<Count> 1</Count>:<></>}</MessageTime>
    </ContactItem>
  )
}

export default ContactComponent;
