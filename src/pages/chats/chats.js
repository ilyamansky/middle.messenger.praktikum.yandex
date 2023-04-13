
import '../../components/form/form';
import '../../components/header/header';
import '../../components/card/card';
import '../../components/chatContent/chatContent';
import chatsTmpl from './chats.hbs';
import { data } from './data';


const chats = () => {
    return chatsTmpl(data);
}

export { chats };