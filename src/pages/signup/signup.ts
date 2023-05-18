import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Form from "../../components/form/form";
import signinTemplate from "./signup.hbs";
import { data } from "./data";
import Block from "../../utils/Block";
import { onFocusin, onFocusout, onSubmit } from "../../utils/validate";

import { FormValidationData } from "../../utils/validate";
const {formData} = FormValidationData;

class SignUp extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header({
      headerContent: data.headerData.headerContent,
    });

    const footer = new Footer({
      footerContent: data.footerData.footerContent,
      isFooter: data.footerData.isFooter,
      linkUrl: data.footerData.linkUrl,
      linkContent: data.footerData.linkContent,
    });

    const form = new Form({
      buttonContent: data.formData.buttonData.buttonContent,
      buttonType: data.formData.buttonData.type,

      inputs: data.formData.inputs,
      isLabel: data.formData.inputs[0].isLabel,
      name: data.formData.inputs[0].name,
      placeholder: data.formData.inputs[0].placeholder,
      type: data.formData.inputs[0].type,

      events: {
        focusin: (event: Event) => {
          if (event.target?.type === "submit") return;
          onFocusin(event);
        },
        focusout: (event: Event) => {
          if (event.target?.type === "submit") return;
          const targetName  = event.target?.name;
          onFocusout(event, formData[targetName]?.regEx, formData[targetName]?.errorMessage)
        },
        submit: (event: Event) => {
          event.preventDefault();
          onSubmit(event, formData);
        } 
       }
      });

    super("div", { ...props, header, footer, form });
  }
  

  render() {
    
    return this.compile(signinTemplate, this.props);
    
  }
}

export default SignUp

