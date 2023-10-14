import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import toggleDarkTheme from './theme';
import './App.css';

function Home() {
  return <h2>Home</h2>;
}

function Playlists() {
  return (
    <div>
      <h2>Playlists</h2>
      {/* Add PlaylistManager component or content here */}
    </div>
  );
}

function Settings() {
  return <h2>Settings</h2>;
}

function MusicPlayer() {
  // Add your MusicPlayer component content here
  return (
    <div>
      <h2>Music Player</h2>
      {/* Your music player UI and controls go here */}
    </div>
  );
}

function App() {
  useEffect(() => {
    const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleColorSchemeChange = (e) => toggleDarkTheme(e.matches);
    darkThemeQuery.addEventListener('change', handleColorSchemeChange);

    toggleDarkTheme(darkThemeQuery.matches);

    return () => darkThemeQuery.removeEventListener('change', handleColorSchemeChange);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>AudioPlayer</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/playlists">Playlists</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/music" element={<MusicPlayer />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;