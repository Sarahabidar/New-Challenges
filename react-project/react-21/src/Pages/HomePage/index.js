import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about-us">To About US</Link>
    </div>
  );
}
