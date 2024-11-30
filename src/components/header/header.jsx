import { Link } from "react-router-dom";
import { assets } from "../../assets";

export function Header() {
  const { logos } = assets;

  return (
    <div className="hea_wrapper">
      <div className="hea_logo-container">
        <img src={logos.logo_black} alt="" />
      </div>
      <div className="hea_navigation-container">
        <div className="hea_navigation">
          <nav>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/cases">Use Cases</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/blog">Blog </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hea_btn-container">
          <button>Request a quote</button>
        </div>
      </div>
    </div>
  );
}
