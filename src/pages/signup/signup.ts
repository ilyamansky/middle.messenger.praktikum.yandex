import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Button from "../../components/button/button";
import Form from "../../components/form/form";
import signinTemplate from "./signup.hbs";
import { data } from "./data";
import Block from "../../utils/Block";


class SignUp extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header({
      headerContent: data.headerData.headerContent,
    });

    const button = new Button({
      buttonContent: data.buttonData.buttonContent,
      type: data.buttonData.type,
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
    })

    super("div", { ...props, header, button, footer, form });
  }
  

  render() {
    
    return this.compile(signinTemplate, this.props);
    
  }
}

export default SignUp
