import React from 'react'
import styled from 'styled-components';
import baseball from '../images/baseballicon.png';

const Gamepage = () => {
    return (
        <GampepageWrapper>
            <Player1>
                <BaseballIcon src={baseball} />
                <PlayerName> 사용자 1</PlayerName>
            </Player1>

            <Player2>
                <BaseballIcon src={baseball} />
                <PlayerName> 사용자 2</PlayerName>
            </Player2>

        </GampepageWrapper>
    )
}

export default Gamepage;

const GampepageWrapper = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  height: 100vh;
  padding: 20px; 
  background-color: #FEFFDD;
  margin: 20px;
  border: 1px solid #333;
`;

const BaseballIcon = styled.img`
    width: 50px;
    height: 50px;
`;

const Player1 = styled.div`
    flex-direction: column;
`;

const PlayerName = styled.span`
    
`;

const Player2 = styled.div`
    
`;