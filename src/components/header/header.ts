import Handlebars from 'handlebars/dist/handlebars.runtime';
Handlebars.registerPartial('header', headerTemplate);
import headerTemplate from './header.hbs';
import Block from "../../utils/Block";

type HeaderProps = {
  headerContent: string;
  isLink?: boolean;
  linkUrl?: string;
  linkMessage?: string;
}

class Header extends Block {
  constructor(props: HeaderProps) {
    super("div", props);
  }

  render() {
    return this.compile(headerTemplate, this.props);
  }
}

export default Header;

