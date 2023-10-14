import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
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
      <Switch>
        <Route path="/playlists">
          <Playlists />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/music">
          <MusicPlayer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;