import { Link } from "react-router-dom";
  
const Footer = () => {
  return (
    <div>
      <h1>My App</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
        <Link to="contact">Contact Us</Link>
      </nav>
    </div>
  );
};

export default Footer;