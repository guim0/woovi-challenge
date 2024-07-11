export const getCurrentDateTime = () => {
  const currentDateTime = new Date();

  const day = currentDateTime.getDate().toString().padStart(2, "0");
  const month = (currentDateTime.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDateTime.getFullYear();
  const hour = currentDateTime.getHours().toString().padStart(2, "0");
  const minutes = currentDateTime.getMinutes().toString().padStart(2, "0");

  const formattedDateTime = `${day}/${month}/${year} - ${hour}:${minutes}`;

  return formattedDateTime;
};
