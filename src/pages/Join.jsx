import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import authAPI from '../api/auth.api';
import { useNavigate } from 'react-router-dom';


const Join = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nicknameRef = useRef();

  const navigate = useNavigate();

  const handlerSignup = async (e) => {
    e.preventDefault();

    const info = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      nickname: nicknameRef.current.value,
    };

    try {
      console.log("joininfo", info);
      await authAPI.SignUp(info);

      emailRef.current.value = '';
      passwordRef.current.value = '';
      nicknameRef.current.value = '';

      navigate('/login');

    } catch (error) {
      throw new Error(`회원가입 실패 : ${error.message}`);
    }
  };


  return (
    <JoinWrapper onSubmit={handlerSignup}>
      <Form>
        <Title> 회원가입 </Title>
        <JoinInput>
          <Label>아이디:</Label>
          <Input type="email" placeholder="아이디를 입력하세요" ref={emailRef} required />
        </JoinInput>

        <JoinInput>
          <Label>비밀번호:</Label>
          <Input type="password" placeholder="비밀번호를 입력하세요" ref={passwordRef} required />
        </JoinInput>

        <JoinInput>
          <Label> 닉네임:</Label>
          <Input type="text" placeholder="닉네임을 입력하세요" ref={nicknameRef} required />
        </JoinInput>
        <Button type="submit">
          회원가입
        </Button>
        <Text> 구글로 회원가입 하기 </Text>
      </Form>
    </JoinWrapper>
  );
};


export default Join;

const JoinWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px; 
  background-color: #FEFFDD;
  margin: 20px;
  border: 1px solid #333;
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: #FDFFE7;
  border: 1px solid #333;
  border-radius: 15px;
  width: 600px;
  height: 600px;
  justify-content: center;
`;

const Title = styled.div`
    font-size: 30px;
`;

const JoinInput = styled.div`
  margin: 20px 0;
  width: 80%;
  text-align: left;
  padding: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  display: inline-block;
  color: black;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border-radius: 15px;
  border: 2px solid #333;
  margin-top: 5px;
`;


const Button = styled.button`
  background-color: #CFB8FF;
  color: black;
  border: none;
  padding: 10px 80px;
  margin: 20px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 15px;

  &:hover {
    background-color: #f8cacc;
  }
`;

const Text = styled.div`
  font-size: 20px; 
`;
