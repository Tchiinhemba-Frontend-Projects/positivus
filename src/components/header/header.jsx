import { Link } from "react-router-dom";
import { assets } from "../../assets";
import { Button } from "../../components";

export function Header() {
  const { logos } = assets;

  return (
    <div className="he_wrapper">
      <div className="he_logo-container">
        <img src={logos.logo_black} alt="" />
      </div>
      <div className="he_navigation-container">
        <div className="he_navigation">
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
        <div className="">
          <Button type="primary">Request a quote</Button>
        </div>
      </div>
    </div>
  );
}
