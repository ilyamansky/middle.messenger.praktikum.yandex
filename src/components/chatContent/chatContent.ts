import Handlebars from 'handlebars/dist/handlebars.runtime';
Handlebars.registerPartial('chatContent', chatContentTemplate);
import chatContentTemplate from './chatContent.hbs';
import Block from '../../utils/Block';


   type ChatContentProps = {
    isChatSelected?: boolean;
    messages?: (MessagesEntity)[] | null;
  }
  type MessagesEntity = {
    messageHeader: string;
    messageBody: string;
    messageFooter: string;
    isYourMessage?: boolean | null;
  }
  
  
  class ChatContent extends Block {
    constructor(props: ChatContentProps | MessagesEntity) {
      super("div", props);
    }
  
    render() {
      return this.compile(chatContentTemplate, this.props);
    }
  }
  
  export default ChatContent;
  