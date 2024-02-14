import { Link } from "react-router-dom";
import classes from "../../Styles/Footer.module.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.footerLinks}>
          <div className={classes.footerNavigation}>
            <ul>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className={classes.socialLinks}>
            <ul>
              <li>
                <a href="">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a href="">
                  <FaSquareXTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagramSquare />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.footerText}>
          <FaRegCopyright />
          <span> All right reserved 2024 | HALAL JIBIKA</span>
        </div>
      </div>
    </div>
  );
}
