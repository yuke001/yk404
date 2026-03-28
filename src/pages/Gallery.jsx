import "../styles/Gallery.css";
import { useState } from "react";
import { Link } from "react-router-dom";

// 🔀 Fisher-Yates Shuffle (better random)
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }

  return array;
}

// 📸 Generate + Shuffle Images
const images = shuffle(
  Array.from({ length: 113 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return `/images/img${num}.jpg`;
  })
);

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="gallery-page">
      <Link to="/" className="back-btn">← Home</Link>

      <h1 className="gallery-title">Memories</h1>

      {/* 🧱 Masonry Layout */}
      <div className="masonry">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            onClick={() => setSelected(src)}
          />
        ))}
      </div>

      {/* 🔍 Lightbox */}
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <img src={selected} alt="" />
        </div>
      )}
    </div>
  );
}