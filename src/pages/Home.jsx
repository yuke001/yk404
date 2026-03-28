import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="overlay"></div>

      <div className="home-content">
        <h1 className="logo">yk404</h1>
        <p className="tagline">(o_o)</p>

        <div className="nav-buttons">
          <Link to="/video" className="btn">🎬 Video</Link>
          <Link to="/gallery" className="btn">🖼️ Memories</Link>
        </div>
      </div>
    </div>
  );
}