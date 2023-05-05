import Handlebars from 'handlebars/dist/handlebars.runtime';
Handlebars.registerPartial('error', errorTemplate)
import errorTemplate from "./error.hbs";
import Block from "../../utils/Block";

type ErrorProps = {
  errorTitle: string;
  errorMessage: string;
  footerMessage: string;
  footerLink: string;
}

class Error extends Block {
  constructor(props: ErrorProps) {
    super("div", props);
  }

  render() {
    return this.compile(errorTemplate, this.props);
  }
}

export default Error;





