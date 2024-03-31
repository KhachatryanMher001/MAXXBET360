import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around; 
  max-width:100%; 
`;

export const Card = styled.div`
  width: 258px;
  background-color: #130d25;
  border-radius: 8px;
  height: 190px;
  padding: 16px; 
  transition: transform 0.2s; 
  cursor: pointer;
  flex: 0 0 auto;
  
  &:hover {
    transform: scale(1.05); 
  }

  @media (max-width:1000px) {
    width:258px;
    margin-right: 15px;
    
  }
  @media (max-width:676px) {
    width:258px;
    margin-right: 15px;
  }

  @media (max-width:480px) {
    width:258px;
    margin-right: 15px;
  }
`;

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  white-space: nowrap;
`;
export const Team2 = styled(Team)`
align-items:self-end;
`;

export const TextWrapper = styled.div`
   display: flex;
   
`;

export const StartText = styled.p`
  text-align: start;  
  padding-top: 15px;
  color: #ffffff99;
  vertical-align: middle;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
`;

export const EndText = styled(StartText)`
 text-align: end;
`;

export const TeamContainer = styled.div`
  display:flex;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 24px;
  max-width:260px;
  color:rgba(255, 255, 255, 0.6);
  line-height: 2.5;
 
`;

export const CardSvg = styled.img`
  width: 40px;
  height: 40px;
`;

export const CardImage = styled.img`
  width: 17px;
  height: 17px;
  vertical-align: text-bottom;
  margin-right: 3px;
  text-align: center;
`;

export const But = styled.button`
 width: 76px;
 height: 32px;
 gap: 16px;
 border-radius: 4px;
 background-color: #2A253A;
 color:white;
 border:none;
 `;

export const BtnInfo = styled.span`
 color: rgba(255, 255, 255, 0.6);
 font-size: 12px;
 margin-right: 18px;
 font-family:open sans, sans-serif;
 `;
