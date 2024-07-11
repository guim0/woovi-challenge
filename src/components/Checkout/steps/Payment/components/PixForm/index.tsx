import FileCopyIcon from "@mui/icons-material/FileCopy";
import { Button } from "@mui/material";
import QRCode from "react-qr-code";
import { QRCodeContainer } from "./style";

export const PixForm = () => {
  return (
    <>
      <QRCodeContainer>
        <QRCode value="pixcode" size={"100%" as unknown as number} />
      </QRCodeContainer>

      <Button
        variant="contained"
        sx={{
          background: "#133A6F",
          paddingX: "1rem",
          display: "flex",
          alignItems: "center",
          margin: "1rem auto",
          color: "white",
          gap: ".3rem",
          fontFamily: "Nunito",
          fontSize: "1rem",
        }}
      >
        <span>Clique para copiar QR CODE</span>
        <FileCopyIcon />
      </Button>
    </>
  );
};
