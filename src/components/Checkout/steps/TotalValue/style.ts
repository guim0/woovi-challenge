import styled from "styled-components";

export const TotalValueOptionsContainer = styled.section`
  width: 100%;
  max-width: 429px;
`;

export const PixSectionCard = styled.div<{ selected: boolean }>`
  border: 2px ${(props) => (props.selected ? "#03D69D" : "#e5e5e5")} solid;
  background-color: ${(props) => (props.selected ? "#F4FBF9" : "")};
  border-radius: 12px;
  margin-bottom: 34px;
  padding: 0.6rem 0;
  width: 100%;
  max-height: 137px;
  cursor: pointer;
`;

export const ValuePriceCard = styled.div<{ selected: boolean }>`
  height: 100%;
  width: 100%;
  border-bottom: 2px solid
    ${(props) => (props.selected ? "#03D69D" : "#e5e5e5")};
  &:nth-last-child(1) {
    border-bottom: none;
  }

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;

  > div {
    padding: 0 1rem;
  }
  .installments {
    height: 100%;
    max-height: 137px;
    padding: 0.8rem 1rem;
  }

  .pixCashback {
    color: #03d69d;
    font-size: 0.9rem;
  }

  .total {
    color: #afafaf;
    font-size: 0.8rem;
  }
`;
export const InstallmentsContainer = styled.section`
  > :first-child {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  > :last-child {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

export const ValueTimesContainer = styled.div<{ selected: boolean }>`
  border: 2px ${(props) => (props.selected ? "#03D69D" : "#e5e5e5")} solid;
  background-color: ${(props) => (props.selected ? "#F4FBF9" : "")};
  width: 100%;
  cursor: pointer;
`;

export const ValueAndTimes = styled.div`
  padding: 0 0.8rem;
`;

export const PixValue = styled.span`
  font-size: 1.2rem;
`;

export const Value = styled.span`
  font-size: 1.2rem;
`;

export const BadgeContent = styled.div`
  background: #e5e5e5;
  padding: 3px 15px;
  margin-top: -40px;
  margin-left: -30px;
  border-radius: 20px;
  font-weight: 800;
  font-size: 0.9rem;
`;

export const BadgeInstallments = styled.div`
  background: #e5e5e5;
  padding: 3px 15px;
  margin-top: -20px;
  margin-right: -150px;
  border-radius: 20px;
  font-weight: 800;
  font-size: 0.9rem;
`;

export const BannerContainer = styled.div`
  display: flex;
  align-items: start;
  margin: 0.3rem 0;
  width: 100%;

  > div {
    display: flex;
    gap: 0.3rem;
    align-items: center;
    height: 32.6px;
    margin-right: -5px;
    padding-right: 3px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    padding: 0 0.4rem;
    color: white;
    background-color: #133a6f;
    width: 88%;
  }

  > svg {
    height: 32.6px;
  }
`;
