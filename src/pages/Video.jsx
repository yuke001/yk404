import "../styles/Video.css";
import { Link } from "react-router-dom";

export default function Video() {
  return (
    <div className="video-page">
        <Link to="/" className="back-btn">← Home</Link>
      <div className="video-container">
        <video controls className="main-video">
          <source src="/video1.mp4" type="video/mp4" />
        </video>

        <h2 className="video-title">Draxor</h2>
      </div>
    </div>
  );
}