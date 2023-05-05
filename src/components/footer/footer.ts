import Handlebars from 'handlebars/dist/handlebars.runtime';
Handlebars.registerPartial('footer', footerTemplate);
import footerTemplate from './footer.hbs';
import Block from "../../utils/Block";

type FooterProps = {
  footerContent: string;
  isFooter?: boolean;
  linkUrl?: string;
  linkContent?: string;
}

class Footer extends Block {
  constructor(props: FooterProps) {
    super("div", props);
  }

  render() {
    return this.compile(footerTemplate, this.props);
  }
}

export default Footer;

