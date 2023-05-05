import Handlebars from 'handlebars/dist/handlebars.runtime';
Handlebars.registerPartial('form', formTemplate);
import formTemplate from './form.hbs';
import Block from "../../utils/Block";

 type FormType = {
    inputs?: (InputsType)[] | null;
  }
   type InputsType = {
    placeholder?: string;
    type?: string;
    isLabel?: boolean;
    label?: string;
    name?: string;
    class?: string;
    events: any;
  }
      

class Form extends Block {
  constructor(props: FormType | InputsType) {
    super("div", props);
  }

  render() {
    return this.compile(formTemplate, this.props);
  }
}

export default Form;





