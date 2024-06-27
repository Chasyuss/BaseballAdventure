import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { FcGoogle } from "react-icons/fc";
import authAPI from '../api/auth.api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handlerSignIn = async (e) => {
    e.preventDefault();

    const logIn = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      console.log("logininfo", logIn);
      await authAPI.SignIn(logIn);
      navigate('/');

    } catch (error) {
      throw new Error(`로그인 실패 : ${error.message}`);
    }

  };

  return (
    <LoginWrapper onSubmit={handlerSignIn}>
      <Form>
        <Title> 로그인 </Title>
        <LoginInput>
          <Label>아이디:</Label>
          <Input type="email" placeholder="아이디를 입력하세요" ref={emailRef} required />
        </LoginInput>

        <LoginInput>
          <Label>비밀번호:</Label>
          <Input type="password" placeholder="비밀번호를 입력하세요" ref={passwordRef} required />
        </LoginInput>

        <Button>
          <LoginButton> 로그인 </LoginButton>
          <JoinButton> 회원가입 </JoinButton>
        </Button>

        <FcGoogle size="30" />

      </Form>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
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

const LoginInput = styled.div`
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

const Button = styled.div`
    
`;
const LoginButton = styled.button`
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

const JoinButton = styled.button`
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


