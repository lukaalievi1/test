import { Link } from "react-router-dom";
import './nav.css';

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="Shop">Shop</Link>
      <Link to="TodoList">TodoList</Link>
    </div>
  );
}

export default Home;