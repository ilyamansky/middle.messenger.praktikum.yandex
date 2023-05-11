import Handlebars from 'handlebars/dist/handlebars.runtime';
Handlebars.registerPartial('form', formTemplate);
import formTemplate from './form.hbs';
import Block from "../../utils/Block";

 type FormType = {
    inputs: (InputsType)[] | null;
    button: ButtonType;
  }
  type ButtonType = {
    buttonType: string,
    buttonContent: string
  }
   type InputsType = {
    placeholder?: string;
    type?: string;
    isLabel?: boolean;
    label?: string;
    name?: string;
    class?: string;
    events?: object;
  }
  
      

class Form extends Block {
  constructor(props: FormType | InputsType | ButtonType) {
    super("div", props);
  }

  render() {
    return this.compile(formTemplate, this.props);
  }
}

export default Form;





