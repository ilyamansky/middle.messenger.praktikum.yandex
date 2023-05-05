import Handlebars from 'handlebars/dist/handlebars.runtime';
Handlebars.registerPartial('message', messageTemplate);
import messageTemplate from './message.hbs';
import Block from '../../utils/Block';

type MessageProps = {
    messageText: string;
    unreadMessages: boolean | null;
    unreadMessagesCount: string | null;
  }
  
  class Message extends Block {
    constructor(props: MessageProps) {
      super("div", props);
    }
  
    render() {
      return this.compile(messageTemplate, this.props);
    }
  }
  
  export default Error;
