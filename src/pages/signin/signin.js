import "../../components/header/header";
import "../../components/footer/footer";
import signinTmpl from "./signin.hbs";
import { data } from "./data";

const signin = () => {
  return signinTmpl(data);
};

export { signin };
