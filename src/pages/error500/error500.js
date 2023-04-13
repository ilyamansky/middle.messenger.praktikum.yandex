import "../../components/error/error";
import errorTmpl from "./error500.hbs";
import { data } from "./data";

const error500 = () => {
  return errorTmpl(data);
};

export { error500 };
