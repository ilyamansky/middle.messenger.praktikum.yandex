import Header from "../../components/header/header";
import Avatar from "../../components/avatar/avatar";
import Form from "../../components/form/form";
import Footer from "../../components/footer/footer";
import Button from "../../components/button/button";
import Block from "../../utils/Block";
import { data } from "./data";
import changePasswordTemplate from "./changePassword.hbs";
import { onFocusin, onFocusout, onSubmit} from "../../utils/validate";

import { FormValidationData } from "../../utils/validate";
const {formData} = FormValidationData;

class ChangePassword extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header({
      headerContent: data.headerData.headerContent,
    });

    const button = new Button({
      buttonContent: data.buttonData.buttonContent,
      type: data.buttonData.type,

      events: {
        click: (event: Event) => {
          onSubmit(event, formData)
        }
      }
    })

    const footer = new Footer({
      footerContent: data.footerData.footerContent,
      isFooter: data.footerData.isFooter,
      linkUrl: data.footerData.linkUrl,
      linkContent: data.footerData.linkContent,
    });

    const avatar = new Avatar({
      class: data.avatarData.class,
      src: data.avatarData.url,
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
        const targetName  = event.target?.name;
        onFocusout(event, formData[targetName].regEx, formData[targetName].errorMessage)
      },
     }
    })

    super("div", { ...props, header, button, footer, form, avatar });
  }
  

  render() {
    
    return this.compile(changePasswordTemplate, this.props);
    
  }
}

export default ChangePassword




