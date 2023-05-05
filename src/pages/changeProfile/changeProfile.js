import "../../components/avatar/avatar";
import "../../components/form/form";
import "../../components/header/header";
import "../../components/footer/footer";
import "../../components/button/button";
import changeProfileTmpl from "./changeProfile.hbs";
import { data } from "./data";

const changeProfile = () => {
  return changeProfileTmpl(data);
};

export { changeProfile };
