import SignIn from "./pages/signin/signin";
import SignUp from "./pages/signup/signup";
import Error404  from "./pages/error404/error404";
import Error500  from "./pages/error500/error500";
import Chats from "./pages/chats/chats";
import ChangeProfile from "./pages/changeProfile/changeProfile";
import ChangePassword from "./pages/changePassword/changePassword"; 
import "./styles/index.css";
import { renderDOM }  from './utils/renderDom';

const path = window.location.pathname;

switch (path) {
  case "/":
   renderDOM('#root', new SignIn());
    break;
  case "/signin":
    renderDOM('#root', new SignIn());
    break;
  case "/signup":
     renderDOM('#root', new SignUp());
    break;
  case "/chats":
    renderDOM('#root', new Chats());
    break;
  case "/changeprofile":
    renderDOM('#root', new ChangeProfile());
    break;
  case "/password":
    renderDOM('#root', new ChangePassword())
    break;
  case "/500":
    renderDOM('#root', new Error500());
    break;
  default:
    renderDOM('#root', new Error404());
}
