import Block from "../../utils/Block";
import error500Template from "./error500.hbs";
import Error from "../../components/error/error";
import { data } from "./data";

class Error500 extends Block {
  constructor(props: Record<string, any> = {}) {
    const error = new Error({
      errorTitle: data.errorData.errorTitle,
      errorMessage: data.errorData.errorMessage,
      footerMessage: data.errorData.footerMessage,
      footerLink: data.errorData.footerLink,
    });

    super("div", { ...props, error });
  }
  

  render() {
    
    return this.compile(error500Template, this.props);
    
  }
}

export default Error500
