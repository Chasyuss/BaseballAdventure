import React from 'react'
import styled from 'styled-components';
import baseball from '../images/baseballicon.png';

const Gameroom = () => {
  return (
    <RoomWrapper>
      <Room>
        <BaseballIcon src={baseball} />
        <RoomInfo>
          <Roomname> 방1 </Roomname>
          <RoomPlayer> 사용자 </RoomPlayer>
        </RoomInfo>
        <BaseballIcon src={baseball} />
      </Room>

      <CreateButton> 방 만들기 </CreateButton>
    </RoomWrapper>
  )
}

export default Gameroom;

const RoomWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 20px; 
  background-color: #FEFFDD;
  margin: 20px;
  border: 1px solid #333;
  flex-direction: column;

`;

const Room = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  width: 100%;
 
`;

const BaseballIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const RoomInfo = styled.div`
  border: 1px solid #CFB8FF;
  background-color: #CFB8FF;
  padding: 20px;
  border-radius: 20px;
  margin: 0 10px;
  width: 800px;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
`;

const Roomname = styled.span`
  font-size: 20px;

`;

const RoomPlayer = styled.span`
  font-size: 20px;
`;

const CreateButton = styled.button`
  background-color: #CFB8FF;
  color: black;
  border: none;
  padding: 10px 50px;
  margin: 20px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 15px;

  &:hover {
    background-color: #f8cacc;
  }
  
`;
