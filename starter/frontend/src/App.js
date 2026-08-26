import { useEffect, useState } from "react";
import "./App.css";

const apiEndpoint =
  "http://a6c2e222a02084a508b09e71143cecb5-1823154042.us-east-1.elb.amazonaws.com:5000";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await fetch(`${apiEndpoint}/movies`);

        if (!response.ok) {
          throw new Error("Unable to retrieve movies");
        }

        const data = await response.json();
        setMovies(data.movies || []);
      } catch (error) {
        console.error("API Error:", error);
        setMessage("Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  return (
    <main className="movie-page">
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">🎬</span>
          <span>Movie Picture</span>
        </div>

        <div className="nav-status">
          <span className="status-dot"></span>
          API Connected
        </div>
      </nav>

      <header className="hero">
        <div className="hero-badge">🎥 MOVIE COLLECTION</div>

        <h1>
          Your Next
          <span> Great Movie</span>
          <br />
          Awaits.
        </h1>

        <p>
          Discover our collection of movies, from thrilling adventures
          to unforgettable stories.
        </p>
      </header>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading movies...</p>
        </div>
      )}

      {!loading && message && (
        <div className="error-box">
          <span>⚠️</span>
          <p>{message}</p>
        </div>
      )}

      {!loading && !message && (
        <section className="movies-section">
          <div className="section-heading">
            <div>
              <p className="section-label">EXPLORE</p>
              <h2>Featured Movies</h2>
            </div>

            <span className="movie-count">
              {movies.length} Movies
            </span>
          </div>

          <div className="movie-grid">
            {movies.map((movie, index) => (
              <article className="movie-card" key={movie.id}>
                <div className={`movie-poster poster-${index + 1}`}>
                  <span className="poster-number">0{movie.id}</span>
                  <span className="play-button">▶</span>
                </div>

                <div className="movie-info">
                  <div className="movie-meta">
                    <span>{movie.year}</span>
                    <span>•</span>
                    <span>{movie.genre}</span>
                  </div>

                  <h3>{movie.title}</h3>

                  <div className="movie-footer">
                    <span>Movie ID: {movie.id}</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <footer>
        <p>Movie Picture</p>
        <span>Built with React + Flask</span>
      </footer>
    </main>
  );
}

export default App;