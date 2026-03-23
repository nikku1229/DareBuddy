import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logos/Favicon.png";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={Logo} alt="Logo" className="logo" />
        </div>
      </header>
    </>
  );
}

export default Header;
