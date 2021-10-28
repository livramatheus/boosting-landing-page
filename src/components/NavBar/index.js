import Control from "./Control";
import Logo from "./Logo";
import Pages from "./Pages";
import { bubble as Menu } from "react-burger-menu";
import { FcHome, FcFaq, FcViewDetails, FcStackOfPhotos } from "react-icons/fc";

export default function NavBar() {
  return (
    <>
      <Menu>
        <a id="home" className="menu-item" href="#">
          <FcHome size="1.5em" />
          <span>Home</span>
        </a>
        <a id="how-it-work" className="menu-item" href="#">
          <FcFaq size="1.5em" />
          <span>How it Works</span>
        </a>
        <a id="features" className="menu-item" href="#">
          <FcViewDetails size="1.5em" />
          <span>Features</span>
        </a>
        <a id="blog" className="menu-item" href="#">
          <FcStackOfPhotos size="1.5em" />
          <span>Blog</span>
        </a>
      </Menu>
      <nav className="top-navbar">
        <Logo />
        <Pages />
        <Control />
      </nav>
    </>
  );
}
