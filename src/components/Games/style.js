import styled from 'styled-components'
import Game1Img from '../../assets/images/game1.png'
import Game2Img from '../../assets/images/game2.png'
import Game3Img from '../../assets/images/game3.png'
import Game4Img from '../../assets/images/game4.png'
import Game5Img from '../../assets/images/game5.png'
import Game6Img from '../../assets/images/game6.png'
import Game7Img from '../../assets/images/Game7.png'
import Game9Img from '../../assets/images/Game9.png'
import Game10Img from '../../assets/images/Game10.png'
import Game11Img from '../../assets/images/Game11.png'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2);
  gap: 16px;
  margin: 0 auto;
  margin-bottom: 0;
`

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  align-items: center;
  padding-bottom: 16px;
`

export const GameCardHeader = styled.h1`
  font-family: Open Sans;
  font-size: 24px;
  font-weight: 700;
  color: white;
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  align-items: end;
`
export const SwiperBtns = styled.div`
  display: flex;
  float: right;
`

export const BtnText = styled.button`
  width: 72px;
  height: 24px;
  gap: 8px;
  border-radius: 4px;
  background-color: #130d25;
  color: white;
  font-size: 12px;
  cursor: pointer;
  border: none;
  margin-right: 5px;
`

export const Next = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  margin-right: 5px;
  background-color: #2a253a;
  color: #ffffff;
`

export const Previous = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: #130d25;
  color: #292f38;
  cursor: pointer;
  border: none;
`

export const SlideBut = styled.div`
  align-items: center;
`

export const CardBase = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
`

export const GameContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 60px;
`

export const Card = styled(CardBase)``

export const Card1 = styled(Card)`
  background-image: url(${Game1Img});
`

export const Card2 = styled(Card)`
  background-image: url(${Game2Img});
`

export const Card3 = styled(Card)`
  background-image: url(${Game3Img});
`

export const Card4 = styled(Card)`
  background-image: url(${Game4Img});
`

export const Card5 = styled(Card)`
  background-image: url(${Game5Img});
`

export const Card6 = styled(Card)`
  background-image: url(${Game6Img});
`

export const Card7 = styled(Card)`
  background-image: url(${Game7Img});
`

export const Card8 = styled(Card)`
  background-image: url(${Game5Img});
`

export const Card9 = styled(Card)`
  background-image: url(${Game9Img});
`

export const Card10 = styled(Card)`
  background-image: url(${Game10Img});
`

export const Card11 = styled(Card)`
  background-image: url(${Game11Img});
`

export const Card12 = styled(Card)`
  background-image: url(${Game4Img});
`
