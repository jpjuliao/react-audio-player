import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MusicPlayer from './components/MusicPlayer';
import PlaylistManager from './components/PlaylistManager';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import SettingsIcon from '@mui/icons-material/Settings';
import StyleIcon from '@mui/icons-material/Style';
import CustomConsole from './components/CustomConsole';

function App() {
  const [playlists, setPlaylists] = useState([]);

  const handlePlaylistCreate = (playlistName) => {
    setPlaylists([...playlists], { name: playlistName, tracks: [] });
  };

  const handlePlaylistEdit = (index, track) => {
    const updatedPlaylists = [...playlists];
    updatedPlaylists[index].tracks.push(track);
    setPlaylists(updatedPlaylists);
  };

  const handlePlaylistDelete = (index) => {
    const updatedPlaylists = [...playlists];
    updatedPlaylists.splice(index, 1);
    setPlaylists(updatedPlaylists);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Home" icon={<HomeIcon />} />
            <Tab label="Playlists" icon={<QueueMusicIcon />} />
            <Tab label="Settings" icon={<SettingsIcon />} />
            <Tab label="Style" icon={<StyleIcon />} />
          </Tabs>
        </Toolbar>
      </AppBar>
      <MusicPlayer />
      <PlaylistManager
        playlists={playlists}
        onPlaylistCreate={handlePlaylistCreate}
        onPlaylistEdit={handlePlaylistEdit}
        onPlaylistDelete={handlePlaylistDelete}
      />
      <CustomConsole />
    </div>
  );
}

export default App;
