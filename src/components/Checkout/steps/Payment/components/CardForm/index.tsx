import { Button } from "@mui/material";
import { Flex, FormContainer, Input } from "./style";

export const CardForm = () => {
  return (
    <FormContainer action="">
      <Input
        variant="outlined"
        label="Nome Completo"
        placeholder="Nome Completo"
      />
      <Input variant="outlined" label="CPF" placeholder="CPF" />
      <Input
        variant="outlined"
        label="Número do Cartão"
        placeholder="Número do cartão"
      />
      <Flex>
        <Input variant="outlined" label="Vencimento" placeholder="Vencimento" />
        <Input variant="outlined" label="CVV" placeholder="CVV" />
      </Flex>
      <Input variant="outlined" label="Parcelas" />
      <Button
        variant="contained"
        sx={{
          background: "#133A6F",
          paddingX: "1rem",

          color: "white",
          fontFamily: "Nunito",
          fontSize: "1rem",
        }}
      >
        Pagar
      </Button>
    </FormContainer>
  );
};
