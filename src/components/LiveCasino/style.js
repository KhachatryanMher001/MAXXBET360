import styled from 'styled-components'
import LiveImg1 from '../../assets/images/Live1.png'
import LiveImg2 from '../../assets/images/Live2.png'
import LiveImg3 from '../../assets/images/Live3.png'
import LiveImg4 from '../../assets/images/Live4.png'

export const Card = styled.div`
  width: 308px;
  height: 200px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    width: 164px;
    height: 98px;
  }
`

export const Card1 = styled(Card)`
  background-image: url(${LiveImg1});
`
export const Card2 = styled(Card)`
  background-image: url(${LiveImg2});
`
export const Card3 = styled(Card)`
  background-image: url(${LiveImg3});
`
export const Card4 = styled(Card)`
  background-image: url(${LiveImg4});
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2);
  gap: 16px;
  margin: 0 auto;
  margin-bottom: 0;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  align-items: end;
`
export const GameCardHeader = styled.h1`
  font-family: Open Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 32.68px;
  text-align: left;
  color: white;
`

export const SwiperBtns = styled.div`
  display: flex;
  float: right;
  margin-top: 20px;
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
  background-color: #130d25;
  color: #292f38;
  cursor: pointer;
  border: none;
  margin-right: 5px;
`

export const Previous = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: #2a253a;
  color: #ffffff;
  cursor: pointer;
  border: none;
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
