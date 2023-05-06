import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Button from "../../components/button/button";
import Form from "../../components/form/form";
import signinTemplate from "./signin.hbs";
import { data } from "./data";
import Block from "../../utils/Block";
import { onFocusin, onFocusout, onSubmit } from "../../utils/validate";
import { RegularExpressions} from"../../utils/validate";

const { login, password } = RegularExpressions;


class SignIn extends Block {
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
      inputs: data.formData.inputs,
      isLabel: data.formData.inputs[0].isLabel,
      name: data.formData.inputs[0].name,
      placeholder: data.formData.inputs[0].placeholder,
      type: data.formData.inputs[0].type,
      class: data.formData.inputs[0].class,

     events: {
      focusin: (event: Event) => {
        onFocusin(event)
      },
      focusout: (event: Event) => {
        let targetName = event.target?.name;

        if(targetName === "login") {
          onFocusout(event, login)
        };

        if(targetName === "password") {
          onFocusout(event, password)
        }
      },
     }
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


    super("div", { ...props, header, button, footer, form });
  }
  

  render() {
    
    return this.compile(signinTemplate, this.props);
    
  }
}

export default SignIn

