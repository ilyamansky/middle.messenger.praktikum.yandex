import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Button from "../../components/button/button";
import Form from "../../components/form/form";
import signinTemplate from "./signup.hbs";
import { data } from "./data";
import Block from "../../utils/Block";
import { onFocusin, onFocusout, onSubmit } from "../../utils/validate";

import { RegularExpressions } from "../../utils/validate";

const { first_name, second_name, password, email, phone } = RegularExpressions;


class SignUp extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header({
      headerContent: data.headerData.headerContent,
    });

    const button = new Button({
      buttonContent: data.buttonData.buttonContent,
      type: data.buttonData.type,

      events: {
        click: () => {
          onSubmit()
        }
      }
    })

    const footer = new Footer({
      footerContent: data.footerData.footerContent,
      isFooter: data.footerData.isFooter,
      linkUrl: data.footerData.linkUrl,
      linkContent: data.footerData.linkContent,
    });

    const form = new Form({
      inputs: data.formData.inputs,
      isLabel: data.formData.inputs[0].isLabel,
      name: data.formData.inputs[0].name,
      placeholder: data.formData.inputs[0].placeholder,
      type: data.formData.inputs[0].type,

      events: {
        focusin: (event: Event) => {
          onFocusin(event)
        },
        focusout: (event: Event) => {
          let targetName = event.target?.name;
  
          if(targetName === "email") {
            onFocusout(event, email)
          };
  
          if(targetName === "first_name") {
            onFocusout(event, first_name)
          };
  
          if(targetName === "second_name") {
            onFocusout(event, second_name)
          };
  
          if(targetName === "password") {
            onFocusout(event, password)
          };
  
          if(targetName === "phone") {
            onFocusout(event, phone)
          };
        }
       }
    })

    super("div", { ...props, header, button, footer, form });
  }
  

  render() {
    
    return this.compile(signinTemplate, this.props);
    
  }
}

export default SignUp

