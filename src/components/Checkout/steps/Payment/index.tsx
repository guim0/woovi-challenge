import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { CardForm } from "./components/CardForm";
import { DateTime } from "./components/CurrentDateTime";
import { PixForm } from "./components/PixForm";
import { Container, DetailsPayment, Flex } from "./style";

export const Payment = (props: {
  total: number;
  type: string;
  times?: number;
}) => {
  const steps = [
    {
      label: (
        <Flex>
          <span>1ª entrada no Pix</span> <b>{props.total}</b>
        </Flex>
      ),
    },
    {
      label: (
        <Flex>
          <span>2ª no cartão</span>
          <b>{props.total}</b>
        </Flex>
      ),
    },
  ];
  return (
    <Container>
      {props.type === "CARD" ? (
        <>
          <CardForm />
        </>
      ) : (
        <>
          <PixForm />
        </>
      )}

      <DetailsPayment>
        <DateTime />

        <Stepper
          activeStep={props.type === "CARD" ? 1 : 0}
          orientation="vertical"
        >
          {steps.map((step, idx) => (
            <Step key={idx}>
              <StepLabel
                StepIconProps={{
                  sx: {
                    fill: "#03D69D",
                  },
                }}
              >
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <Divider sx={{ marginY: "1rem" }} />
        <Flex>
          <span>CET: 0,5%</span>
          <span>
            Total: {props.times}x {props.total}
          </span>
        </Flex>

        <Accordion
          variant="outlined"
          sx={{
            width: "100%",
            border: "none",
            marginTop: "1rem",
            paddingTop: "1rem",
          }}
        >
          <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
            <b>Como funciona?</b>
          </AccordionSummary>
          <AccordionDetails>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </span>
          </AccordionDetails>
        </Accordion>

        <Divider sx={{ marginY: "1rem" }} />
        <div style={{ margin: "1rem auto", textAlign: "center" }}>
          <span style={{ color: "#B2B2B2" }}>Identificador: </span>
          <br />
          <span style={{ fontWeight: 800 }}>
            2c1b951f356c4680b13ba1c9fc889c47
          </span>
        </div>
      </DetailsPayment>
    </Container>
  );
};
