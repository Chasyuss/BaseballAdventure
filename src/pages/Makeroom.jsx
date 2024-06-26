import React from 'react'
import styled from 'styled-components';

const Makeroom = () => {
    return (
        <MakeroomWrapper>
            <Form>
                <Title> 방 만들기 </Title>
                <Explain> * 최대 인원은 2명</Explain>

                <OptionInput>
                    <Label> 방 이름 </Label>
                    <Input type="text" />
                </OptionInput>

                <OptionInput>
                    <Label> 기회 횟수 </Label>
                    <Input type="text" />
                </OptionInput>

                <Button> 완료 </Button>
            </Form>
        </MakeroomWrapper>
    )
}

export default Makeroom;

const MakeroomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px; 
  background-color: #FEFFDD;
  margin: 20px;
  border: 1px solid #333;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: #FDFFE7;
  border: 1px solid #333;
  max-width: 800px;
  width: 90%;
  height: 500px;
  justify-content: space-between;
  box-sizing: border-box;
`;

const Title = styled.h2`
    font-size: 30px;
    margin-top: 10px;

`;

const Explain = styled.p`
    font-size: 15px;
`;

const OptionInput = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
`;

const Label = styled.label`
    margin: 10px;
    font-size: 20px;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #333;
    border-radius: 15px;
    width: 300px;

`;

const Button = styled.button`
  background-color: #CFB8FF;
  padding: 15px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  width: 200px;
  text-align: center;
  font-size: 15px;
    
`;
