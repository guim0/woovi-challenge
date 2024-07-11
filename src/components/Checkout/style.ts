import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const TitleCheckout = styled.h2`
  text-align: center;
  color: #4d4d4d;
  font-size: 1.2rem;
`;

export const WooviLogoContainer = styled.div`
  max-width: 120px;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  font-size: 0.8rem;
  color: #b2b2b2;

  .logo {
    margin-left: 4px;
    filter: grayscale(100);
    filter: contrast(-1);
    > svg {
      width: 57px;
    }
  }
`;
