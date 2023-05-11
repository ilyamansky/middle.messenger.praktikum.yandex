import Handlebars from 'handlebars/dist/handlebars.runtime';
Handlebars.registerPartial('button', buttonTemplate);
import buttonTemplate from './button.hbs';
import './button.css';
import Block from "../../utils/Block";

type ButtonProps = {
  class?: string;
  type?: string;
  buttonContent?: string;
  events?: object,
}

class Button extends Block {
  constructor(props: ButtonProps) {
    super("div", props);
  }

  render() {
    return this.compile(buttonTemplate, this.props);
  }
}

export default Button;





