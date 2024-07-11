import { Tail } from "@/assets/icons/tail";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Badge } from "@mui/material";
import { useEffect, useState } from "react";
import {
  BadgeContent,
  BadgeInstallments,
  BannerContainer,
  InstallmentsContainer,
  PixSectionCard,
  PixValue,
  TotalValueOptionsContainer,
  Value,
  ValuePriceCard,
  ValueTimesContainer,
} from "./style";

// Definindo o tipo para os itens de parcelamento
type Installment = {
  times: number;
  value: string;
  total: string;
  pix: string;
};

export const TotalValueOptions = () => {
  const [pixSelected, setPixSelected] = useState(false);
  const [installments, setInstallments] = useState<Installment[]>([]);
  const [selectedItems, setSelectedItems] = useState<boolean[]>([]);

  const totalPriceRandomizer = () => {
    const randomValue = Math.random() * (30000 - 500) + 500;
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(randomValue);

    return Array.from({ length: 6 }, (_, i) => {
      const times = i + 2;
      const installmentValue =
        (randomValue * Math.pow(1 + 0.01, times)) / times;
      const formattedInstallment = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(installmentValue);
      return {
        times,
        value: formattedInstallment,
        total: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(installmentValue * times),
        pix: formattedValue,
      };
    });
  };

  useEffect(() => {
    const generatedInstallments = totalPriceRandomizer();
    setInstallments(generatedInstallments);
    setSelectedItems(new Array(generatedInstallments.length).fill(false));
  }, []);

  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelected) => prevSelected.map((_, i) => i === index));
    setPixSelected(false);
  };

  return (
    <TotalValueOptionsContainer>
      <Badge
        sx={{ width: "100%", height: "100%" }}
        badgeContent={<BadgeContent>Pix</BadgeContent>}
        overlap="circular"
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <PixSectionCard
          onClick={() => {
            setPixSelected(!pixSelected);
          }}
          selected={pixSelected}
        >
          <ValuePriceCard selected={pixSelected}>
            <div>
              <PixValue>
                <b>1x </b>
                {installments[0]?.pix}
              </PixValue>
              <span className="pixCashback">
                <br />
                Ganhe <b>3%</b> de Cashback
              </span>
            </div>

            <div>
              {!pixSelected ? (
                <RadioButtonUncheckedIcon color="disabled" />
              ) : (
                <CheckCircleIcon style={{ color: "#03D69D" }} />
              )}
            </div>
            <BannerContainer>
              <div>
                🤑 <b>R$ 300,00</b> de volta no seu Pix na hora
              </div>
              <Tail />
            </BannerContainer>
          </ValuePriceCard>
        </PixSectionCard>
      </Badge>
      <InstallmentsContainer>
        {installments.map((items, index) => (
          <ValueTimesContainer
            key={items.times}
            selected={selectedItems[index]}
            onClick={() => handleItemClick(index)}
          >
            {index === 0 ? (
              <Badge
                badgeContent={
                  <BadgeInstallments>Pix Parcelado</BadgeInstallments>
                }
                overlap="circular"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              ></Badge>
            ) : null}
            <ValuePriceCard selected={selectedItems[index]}>
              <div className="installments">
                <Value>
                  <b>{items.times}x </b>
                  {items.value}
                </Value>
                <span className="total">
                  <br />
                  Total: {items.total}
                </span>
              </div>

              <div>
                {!selectedItems[index] ? (
                  <RadioButtonUncheckedIcon color="disabled" />
                ) : (
                  <CheckCircleIcon style={{ color: "#03D69D" }} />
                )}
              </div>

              {items.times === 4 && (
                <BannerContainer>
                  <div>
                    <b> -3% de juros:</b> Melhor opção de parcelamento
                  </div>
                  <Tail />
                </BannerContainer>
              )}
            </ValuePriceCard>
          </ValueTimesContainer>
        ))}
      </InstallmentsContainer>
    </TotalValueOptionsContainer>
  );
};
