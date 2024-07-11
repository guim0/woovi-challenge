import { getCurrentDateTime } from "../../../../../utils/getCurrentDateTime";

export const DateTime = () => {
  const currentDateTime = getCurrentDateTime();

  return (
    <div style={{ margin: "1rem auto", textAlign: "center" }}>
      <span style={{ color: "#B2B2B2" }}>Prazo de pagamento: </span>
      <br />
      <span style={{ fontWeight: 800 }}>{currentDateTime}</span>
    </div>
  );
};
