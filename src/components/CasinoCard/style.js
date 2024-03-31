import styled from 'styled-components'
import casinoImage from '../../assets/images/casino-image.png'
import casinoImage2 from '../../assets/images/casino-image-2.png'

export const CardContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Container = styled.div`
  background-image: url(${casinoImage});
  background-size: cover;
  background-position: center;
  width: 48%;
  height: 408px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 80%;
    align-items: center;
  }
`

export const Container2 = styled(Container)`
  background-image: url(${casinoImage2});
  background-color: rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const Block = styled.div`
  display: block;
  width: 95%;
  height: 89px;
  margin-left: 24px;
  margin-top: 150px;

  @media (max-width: 768px) {
    width: 80%;
  }
`

export const CasinoHeader = styled.h1`
  font-family: 'Open Sans' sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32.68px;
  text-align: left;
  color: white;
`

export const CasinoCardText = styled.p`
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.79px;
  letter-spacing: 0.02em;
  text-align: left;
  color: white;
  width: 80%;

  @media (max-width: 768px) {
    width: 80%;
  }
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`
export const ButtonBox = styled.div`
  display: flex;
  height: 51px;
  justify-content: space-evenly;
  margin-top: 36px;
  @media (max-width: 768px) {
    width: 80%;
  }
`

export const CasinoBtn = styled.button`
  width: 49%;
  height: 51px;
  border-radius: 4px;
  background-color: #1bb96b;
  color: white;
  text-align: center;
  align-items: center;
  border: none;
`

export const LiveGameBtn = styled.button`
  width: 49%;
  /* height: 51px; */
  border-radius: 4px;
  background-color: #b91b5d;
  color: white;
  border: none;
  cursor: pointer;
`
export const IcBut = styled.img`
  width: 20px;
  height: 20px;
  color: white;
  vertical-align: middle;
  margin-right: 3px;
`
