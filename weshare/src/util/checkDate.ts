import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

// É preciso utilizar o plugin customParseFormat de dayjs.
dayjs.extend(customParseFormat);

const checkDate = (date: string) => {
  const dateArray = date.split("/");
  const newDate = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
  return dayjs(newDate, "YYYY-MM-DD", true).isValid();
};
export default checkDate;