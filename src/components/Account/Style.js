import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1280px;
`;

export const CreateAccount = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  max-width: 500px;
  height: 269px;
  margin-left: 44px;
  background-color: rgba(6, 0, 25, 1);
  border:  none;

  @media (max-width: 768px) {
    width: calc(100vw - 92px); 
    max-width: none;
    margin-left: 0;
    margin-right: 46px; 

    & h1{
      font-size: 23px;
    }
    & h2{
      font-size: 18px;
    }
  }
    @media (max-width: 332px) {
    width: calc(100vw - 92px); 
    max-width: none;
    margin-left: 0;
    margin-right: 46px; 

    & h1{
      font-size: 18px;
    }
    & h2{
      font-size: 16px;
    }

    & button{
      width: 84px;
      padding: 4px 16px 4px 16px;


    }

  }
`;

export const Text = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 68.26px;
  color: white;
  white-space: nowrap;
  max-width: 100%; 
  overflow: hidden;
  text-overflow: ellipsis; 
  `;

export const RootText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 56px;
  font-weight: 800;
  line-height: 29.26px;
  text-align: left;
  color: white;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 28px;
    font-weight: 600;
  }
`;

export const Button = styled.button`
  width: 168px;
  height: 40px;
  padding: 8px 32px 8px 32px;
  border-radius: 4px;
  background-color: rgba(185, 27, 93, 1);
  color: rgba(255, 255, 255, 1);
  max-width: 100%; 
  overflow: hidden;
  text-overflow: ellipsis; 
  border: none;
`;

export const UpToSum = styled.span`
  color: rgba(27, 185, 107, 1);
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 320px;  
  margin-right: 100px;
  padding-right: 40px;

  @media (max-width: 768px) {
    width: 100%;
     margin-right: 0;
    padding-right: 0;
  }
`;

export const Img = styled.img`
  max-width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;
