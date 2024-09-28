import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
