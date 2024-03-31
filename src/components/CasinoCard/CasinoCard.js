import React from 'react';
import {
  Container, Container2, CardContainer, CasinoHeader,
  CasinoCardText, Icon, Block, ButtonBox, CasinoBtn,
  LiveGameBtn, IcBut,
} from './style';
import Cards from '../../assets/icons/Cards.svg';
import Rugby from '../../assets/icons/Rugby.svg';
import Ball from '../../assets/icons/Ball.svg';
import Zar from '../../assets/icons/Zar.svg';
import Chip from '../../assets/icons/Chip.svg';
import Live from '../../assets/icons/LiveW.svg';

export default function Card() {
  return (
    <CardContainer>
      <Container>
        <Block>
          <CasinoHeader>
            <Icon src={Cards} alt="Card" />
            Casino
          </CasinoHeader>
          <CasinoCardText>
            Dive in to our wide range of in-house games, live casino and slots to
            experience a thrilling casino adventure.
          </CasinoCardText>
        </Block>
        <ButtonBox>
          <CasinoBtn>
            <IcBut src={Zar} />
            Casino
          </CasinoBtn>
          <LiveGameBtn>
            <IcBut src={Chip} />
            Live Casino
          </LiveGameBtn>
        </ButtonBox>
      </Container>

      <Container2>
        <Block>
          <CasinoHeader>
            <Icon src={Rugby} alt="Rugby" />
            Casino
          </CasinoHeader>
          <CasinoCardText>
            Dive in to our wide range of in-house games, live casino and slots to
            experience a thrilling casino adventure.
          </CasinoCardText>
        </Block>
        <ButtonBox>
          <CasinoBtn>
            <IcBut src={Ball} />
            Sport
          </CasinoBtn>
          <LiveGameBtn>
            <IcBut src={Live} />
            Live
            {' '}
          </LiveGameBtn>
        </ButtonBox>
      </Container2>
    </CardContainer>
  );
}
