import React from 'react'
import styled from 'styled-components';
import ContactComponent from "./ContactComponent";
import { contactList } from '../demoData';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.6;
  height: 100%;
  width: 100%;
  border-right: 1px solid #dadada;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
`;
const Dp = styled.img`
    width:35px;
    height:35px;
    border-radius:50%;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  background: #f6f6f6;
  padding: 10px;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 16px;
  width: 100%;
  padding: 5px 10px;
  gap: 10px;
`;
const SearchIcon = styled.img`
  width: 28px;
  height: 28px;
`;
export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 15px;
  margin-left:10px;
`;





const LeftBar = (props) => {
  
  return (
    <Container>
      <Profile>
        
        <Dp src="../image/subinay.jpg" />
        
      </Profile>
      <SearchBox>
        <SearchContainer>
          <SearchIcon src="../image//search-icon.svg" />
          <SearchInput placeholder="Search or start new chat" />
        </SearchContainer>
      </SearchBox>
      {contactList.map((userData)=>{
        return <ContactComponent userData={userData} setChat={props.setChat}/>
      })}
    </Container>
  )
}

export default LeftBar;
