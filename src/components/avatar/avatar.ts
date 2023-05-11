import Handlebars from 'handlebars/dist/handlebars.runtime';
import avatarTemplate from './avatar.hbs';
import './avatar.css';
Handlebars.registerPartial('avatar', avatarTemplate);
import Block from '../../utils/Block';

type AvatarProps = {
    class?: string,
    src?: string,
  }
  
  class Avatar extends Block {
    constructor(props: AvatarProps) {
      super("div", props);
    }
  
    render() {
      return this.compile(avatarTemplate, this.props);
    }
  }
  
  export default Avatar;