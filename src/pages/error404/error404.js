import '../../components/error/error';
import errorTmpl from './error404.hbs';
import { data } from './data';


const error404 = () => {
    return errorTmpl(data);
}

export { error404 };