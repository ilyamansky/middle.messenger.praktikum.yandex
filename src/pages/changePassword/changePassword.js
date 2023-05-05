import "../../components/avatar/avatar";
import "../../components/form/form";
import "../../components/header/header";
import "../../components/footer/footer";
import "../../components/button/button";
import changePasswordTmpl from "./changePassword.hbs";
import { data } from "./data";

const changePassword = () => {
  return changePasswordTmpl(data);
};

export { changePassword };
