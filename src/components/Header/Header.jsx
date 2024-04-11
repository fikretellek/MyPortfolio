import HamMenu from "../HamMenu/Hammenu";
import "./Header.scss";

export default function Header({ data }) {
  return (
    <header>
      <div id="logo-container">
        <img className="logo" src={data.logo.light} alt="" />
      </div>

      <h3 id="name-logo">{data.personalInfo.siteName}</h3>

      <HamMenu />
    </header>
  );
}
