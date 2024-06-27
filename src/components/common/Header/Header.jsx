import React, { useState } from 'react'
import styled from 'styled-components';
import Logoimg from '../../../images/logo.png'
import authAPI from '../../../api/auth.api';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handlerLogout = () => {
        authAPI.SignOut();
        setUser(null);
        console.log('로그아웃 완료');
    }

    const gotoLogin = () => {
        navigate('/login');
    }


    return (
        <Container>
            <Form>
                <Logo src={Logoimg} alt="header-logo" />
                <Usermenu>
                    {user ? (
                        <>
                            <UserName>{user.nickname} 님</UserName>
                            <Loginbutton onClick={handlerLogout}>
                                로그아웃
                            </Loginbutton>
                        </>
                    ) : (
                        <Loginbutton onClick={gotoLogin}>
                            로그인
                        </Loginbutton>
                    )}
                </Usermenu>
            </Form>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    background-color: #f8f8f8;
`;

const Form = styled.div`
    background-color: white;
    padding: 20px;
    border: 1px solid #333;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const Logo = styled.img`
    height: 50px;
    cursor: pointer;

`;

const Usermenu = styled.div`
    display: flex;
    align-items: center;
`;

const UserName = styled.div`
    margin-right: 20px;
`;

const Loginbutton = styled.button`
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: #333;
`;







