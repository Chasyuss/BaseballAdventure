import React from 'react'
import styled from 'styled-components';
import profile from '../images/memoticon.png'

const Mypage = () => {
    return (
        <MypageWrapper>
            <Form>
                <ProfileSection>
                    <ProfileCircle>
                        <ProfilImage src={profile} alt="user" />
                    </ProfileCircle>

                    <Name> 사용자 </Name>
                </ProfileSection>

                <Divider />

                <Edit>
                    <Label> 프로필 변경</Label>
                    <Input type="text" />

                    <Label> 닉네임 변경 </Label>
                    <Input type="text" />

                    <Button> 수정하기 </Button>
                </Edit>
            </Form>
        </MypageWrapper>
    );
};

export default Mypage;

const MypageWrapper = styled.div`
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
  /* height: 500px; */
  justify-content: center;
  /* box-sizing: border-box; */
`;

const ProfileCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const ProfilImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Name = styled.h2`
    font-size: 30px;
`;

const Divider = styled.hr`
  width: 60%;
  border: 0;
  margin: 10px;
  border-top: 1px solid #333;
`;

const Edit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Label = styled.label`
    padding: 15px;
    text-align: center;
    margin: 10px 0;
    width: 200px;

`;

const Input = styled.input`
    margin: 10px 0;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #333;
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
    
`;