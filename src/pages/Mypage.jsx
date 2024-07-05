import React, { useState } from 'react';
import styled from 'styled-components';
import useUserStore from '../store/useUserStore';
import authAPI from '../api/auth.api';
import { uploadFile } from '../api/storage';


const Mypage = () => {
  const { user, setUser } = useUserStore();
  const [nickname, setNickname] = useState(user.nickname);
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState(user.profileimage || '');

  const handleNicknameChange = (e) => {
    console.log('닉네임 변경:', e.target.value);
    setNickname(e.target.value);
  };

  const handleProfileImageChange = (e) => {
    console.log('프로필 이미지 변경:', e.target.files[0]);
    setProfileImage(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log('수정하고싶어');

    try {
      let updatedProfileImageUrl = profileImageUrl;
      if (profileImage) {
        updatedProfileImageUrl = await uploadFile(profileImage);
        console.log('업로드된 이미지 URL:', updatedProfileImageUrl);
      }

      const updatedUser = {
        id: user.id,
        nickname,
        profileimage: updatedProfileImageUrl,
      };

      const updatedUserData = await authAPI.UpdateUser(updatedUser);
      console.log('업데이트 성공:', updatedUserData);
      setUser(updatedUserData);
      setProfileImageUrl(updatedProfileImageUrl);
    } catch (error) {
      console.error('업데이트 에러:', error);
    }
  };

  return (
    <MypageWrapper>
      <Form>
        <ProfileSection>
          <ProfileCircle>
            <ProfilImage src={profileImageUrl} alt="user" />
          </ProfileCircle>
          <Name>{user.nickname}</Name>
        </ProfileSection>
        <Divider />
        <Edit>
          <Label>프로필 변경</Label>
          <Input type="file" onChange={handleProfileImageChange} />
          <Label>닉네임 변경</Label>
          <Input type="text" value={nickname} onChange={handleNicknameChange} />
          <Button type="submit" onClick={handleUpdate}>수정하기</Button>
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
  object-fit: cover;
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

  &:hover {
    background-color: #f8cacc;
  }
    
`;
