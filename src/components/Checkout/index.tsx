import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { WooviLogo } from "../../assets/icons/woovi";
import { Payment } from "./steps/Payment";
import { TotalValueOptions } from "./steps/TotalValue";
import { Container, Footer, TitleCheckout, WooviLogoContainer } from "./style";

export const Checkout = () => {
  const [totalValue, setTotalValue] = useState(0);
  const [timesValue, setTimesValue] = useState(0);
  const [typePayment, setTypePayment] = useState("CARD");
  const [currentStep, setCurrentStep] = useState(1);
  const stepByStep = [
    {
      step: 1,
      title: "João, como você quer pagar?",
      child: (
        <TotalValueOptions
          times={setTimesValue as any}
          value={setTotalValue as any}
          type={setTypePayment}
        />
      ),
      type: "typePayment",
    },
    {
      step: 2,
      title: `João, pague ${
        typePayment === "PIX" ? "a entrada" : ``
      } de ${totalValue}${
        typePayment === "PIX"
          ? ", pelo Pix."
          : ` o restante em ${timesValue}x no cartão.`
      }`,
      child: (
        <Payment total={totalValue} type={typePayment} times={timesValue} />
      ),
      type: "finish",
    },
  ];

  const handleSteps = () => {
    setCurrentStep(currentStep + 1);
  };
  return (
    <Container>
      <WooviLogoContainer>
        <WooviLogo />
      </WooviLogoContainer>
      {stepByStep.map((data) => (
        <>
          {currentStep === data.step && (
            <React.Fragment key={data.step}>
              <TitleCheckout>{data.title}</TitleCheckout>
              {data.child}
            </React.Fragment>
          )}
        </>
      ))}

      <Button
        variant="contained"
        sx={{
          background: "#133A6F",
          paddingX: "2rem",
          color: "white",
          fontFamily: "Nunito",
          fontSize: "1rem",
          marginTop: ".5rem",
        }}
        disabled={currentStep >= 2 || !totalValue}
        onClick={handleSteps}
      >
        Próximo
      </Button>

      <Footer>
        <GppGoodOutlinedIcon sx={{ color: "#B2B2B2" }} />

        <span> Pagamento 100% seguro via: </span>
        <div className="logo">
          <WooviLogo />
        </div>
      </Footer>
    </Container>
  );
};
