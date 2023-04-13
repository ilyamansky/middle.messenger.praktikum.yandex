import { signup } from "./pages/signup/signup";
import { signin } from "./pages/signin/signin";
import { error404 } from "./pages/error404/error404";
import { error500 } from "./pages/error500/error500";
import { changeProfile } from "./pages/changeProfile/changeProfile";
import { changePassword } from "./pages/changePassword/changePassword";
import { chats } from "./pages/chats/chats";
import "./styles/index.css";

const root = document.querySelector("#root");

const path = window.location.pathname;

switch (path) {
  case "/":
    root.innerHTML = signin();
    break;
  case "/signin":
    root.innerHTML = signin();
    break;
  case "/signup":
    root.innerHTML = signup();
    break;
  case "/chats":
    root.innerHTML = chats();
    break;
  case "/changeprofile":
    root.innerHTML = changeProfile();
    break;
  case "/password":
    root.innerHTML = changePassword();
    break;
  case "/500":
    root.innerHTML = error500();
    break;
  default:
    root.innerHTML = error404();
}
