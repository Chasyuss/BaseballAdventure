import React from 'react'
import Header from '../components/common/Header/Header'
import BaseballIcon from '../images/baseballicon.png';
import styled from 'styled-components';
import { GlobalStyles } from '@mui/material';

const Main = () => {
    return (
        <Maincontatiner>
            <Form>
                <TitleContainer>
                    <BallIcon src={BaseballIcon} />
                    <Title> 숫자야구 </Title>
                    <BallIcon src={BaseballIcon} />
                </TitleContainer>

                <Button> 게임 전적 확인하기 </Button>
                <Button> 게임하기 </Button>
                <Button> 방 만들기 </Button>
            </Form>
        </Maincontatiner>

    );
};

export default Main;

const Maincontatiner = styled.div`
    background-color: #FEFFDD;
    margin: 10px;
    padding: 10px;
    border: 1px solid #333;
`;

const Form = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 100px;

`;
const BallIcon = styled.img`
    height: 40px;
    margin: 0 10px;
    
`;
const Title = styled.div`
    font-size: 30px;
`;

const Button = styled.button`
    background-color: #CFB8FF;
    border: none;
    border-radius: 20px;
    padding: 15px;
    margin: 10px;
    font-size: 18px;
    cursor: pointer;
    width: 300px;
    margin: 30px;
`;
