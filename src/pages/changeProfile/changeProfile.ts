import Header from "../../components/header/header";
import Form from "../../components/form/form";
import Footer from "../../components/footer/footer";
import Button from "../../components/button/button";
import Block from "../../utils/Block";
import changeProfileTemplate from './changeProfile.hbs'
import Avatar from "../../components/avatar/avatar";
import { data } from "./data";
import { onFocusin, onFocusout, onSubmit} from "../../utils/validate";
import { RegularExpressions } from "../../utils/validate";

const { first_name, label_name, second_name, login, email, phone } = RegularExpressions;

class ChangeProfile extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header({
      headerContent: data.headerData.headerContent,
    });

    const avatar = new Avatar({
      class: data.avatarData.class,
      src: data.avatarData.src,
    })

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

        if(targetName === "login") {
          onFocusout(event, login)
        };

        if(targetName === "email") {
          onFocusout(event, email)
        };

        if(targetName === "first_name") {
          onFocusout(event, first_name)
        };

        if(targetName === "second_name") {
          onFocusout(event, second_name)
        };

        if(targetName === "display_name") {
          onFocusout(event, label_name)
        };

        if(targetName === "phone") {
          onFocusout(event, phone)
        };
      }
     }
    })

    super("div", { ...props, header, button, footer, form, avatar });
  }
  

  render() {
    
    return this.compile(changeProfileTemplate, this.props);
    
  }
}

export default ChangeProfile
