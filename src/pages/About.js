import { Link } from "react-router-dom";

const About = () => {
    return (
      <div>
        <h1>About</h1>
        <nav>
          <Link to="orders">My Orders</Link>
          <Link to="details">My Details</Link>
          <Link to="settings">Settings</Link>
        </nav>
      </div>
    );
  }

  export default About;