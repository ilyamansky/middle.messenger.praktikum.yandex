import "../../components/form/form";
import "../../components/header/header";
import "../../components/footer/footer";
import signupTmpl from "./signup.hbs";
import { data } from "./data";

const signup = () => {
  return signupTmpl(data);
};

export { signup };
