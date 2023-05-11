import Header from "../../components/header/header";
import Form from "../../components/form/form";
import Card from "../../components/card/card";
import ChatContent from "../../components/chatContent/chatContent";
import chatsTemplate from "./chats.hbs";
import { data } from "./data";
import Block from "../../utils/Block";


class Chats extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header({
      headerContent: data.headerData.headerContent,
    });

    const form = new Form({
      inputs: data.formData.inputs,
      placeholder: data.formData.inputs[0].placeholder,
      type: data.formData.inputs[0].type,
    })

    const card = new Card({
        cards: data.cardData.cards,
        userName: data.cardData.cards[0].userName,
        avatarUrl: data.cardData.cards[0].avatarUrl,
        lastMessage: data.cardData.cards[0].lastMessage,
        isUnreadMessage: data.cardData.cards[0].isUnreadMessage,
        count: data.cardData.cards[0].count, 
    })

    const chatContent = new ChatContent({
        isChatSelected: data.chatContentData.isChatSelected,
        messages: data.chatContentData.messages,
        messageHeader: data.chatContentData.messages[0].messageHeader,
        messageFooter: data.chatContentData.messages[0].messageFooter,
        isYourMessage: data.chatContentData.messages[0].isYourMessage,
    })

    const form2 = new Form({
      inputs: data.formContent.inputs,
      placeholder: data.formContent.inputs[0].placeholder,
      type: data.formContent.inputs[0].type,

    })

    super("div", { ...props, header, form, card, chatContent, form2 });
  }
  

  render() {
    
    return this.compile(chatsTemplate, this.props);
    
  }
}

export default Chats

