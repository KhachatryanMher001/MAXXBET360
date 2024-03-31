import React from 'react';
import {
  Container, CreateAccount, Text, RootText, UpToSum, Button, ImgBox, Img,
} from './Style';
import TeamPhoto from '../../assets/images/team.png';

function Account() {
  return (
    <Container>
      <CreateAccount>
        <Text>SIGN UP & GET REWARD</Text>
        <RootText>
          UP TO
          <UpToSum>$20,000</UpToSum>
        </RootText>
        <Button>Create Account</Button>
      </CreateAccount>
      <ImgBox>
        <Img src={TeamPhoto} alt="" />
      </ImgBox>
    </Container>
  );
}

export default Account;
