import Handlebars from 'handlebars/dist/handlebars.runtime';
Handlebars.registerPartial('card', cardTemplate);
import cardTemplate from './card.hbs';
import './card.css';
import Block from '../../utils/Block';

type CardType = {
    cards?: (CardsEntityType)[] | null;
}
type CardsEntityType = {
    userName: string;
    avatarUrl?: string;
    lastMessage: string;
    isUnreadMessage?: boolean | null;
    count?: string | null;
    alt?: string
}
  
class Card extends Block {
  constructor(props: CardType | CardsEntityType) {
    super("div", props);
  }

  render() {
    return this.compile(cardTemplate, this.props);
  }
}

export default Card;

