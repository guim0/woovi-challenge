import { WooviLogo } from "../../assets/icons/woovi";
import { TotalValueOptions } from "./steps/TotalValue/TotalValueOptions";
import { Container, TitleCheckout, WooviLogoContainer } from "./style";

export const Checkout = () => {
  const stepByStep = [
    { title: "João, como você quer pagar?", child: <TotalValueOptions /> },
  ];
  return (
    <Container>
      <WooviLogoContainer>
        <WooviLogo />
      </WooviLogoContainer>
      {stepByStep.map((data) => (
        <>
          <TitleCheckout>{data.title}</TitleCheckout>

          <>{!data.child ? <>Sem Resultados</> : <>{data.child}</>}</>
        </>
      ))}
    </Container>
  );
};
