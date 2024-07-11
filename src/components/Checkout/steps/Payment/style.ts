import { Step } from "@mui/material";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 429px;
`;

export const DetailsPayment = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const StepCustom = styled(Step)`
  > svg {
    color: #03d69d;
  }
`;

export const Flex = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
`;
