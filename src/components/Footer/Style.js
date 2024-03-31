import styled from 'styled-components'

export const FootLine = styled.div`
  background-color: #130d25;
  width: 100%;
  height: 212px;
  margin-top: 58px;
`
export const FootFLex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
  height: 148px;
`
export const FootBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const FooterRootText = styled.h1`
  color: white;
  font-family: 'Open Sans' sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  padding-top: 32px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const FooterText = styled.p`
  font-family: 'Open Sans' sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 35px;
  color: #ffffff99;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const Inf = styled.div`
  width: 100%;
  height: 51px;
  text-align: center;
  background-color: #2a253a;
  padding-top: 13px;
`

export const Icon = styled.img`
  color: Grey;
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin-right: 5px;

  @media (max-width: 768px) {
    display: none;
  }
`
