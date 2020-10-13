import styled from 'styled-components';
import landingBackground from '../../assets/landing.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${landingBackground}) no-repeat 80% center;
`;

export const Main = styled.div`
  max-width: 350px;
  h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;
  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    font-weight: 800px;
  }
`;

export const EnterApp = styled(Link)`
  position: absolute;

  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    background: #96feff;
  }
`;
