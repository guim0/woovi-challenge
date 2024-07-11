import { TextField } from "@mui/material";
import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled(TextField)`
  font-family: "Nunito", sans-serif;
`;
