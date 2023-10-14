import React, { useState } from 'react';

function PlaylistManager({ playlists, onPlaylistCreate, onPlaylistEdit, onPlaylistDelete }) {
  const [newPlaylistName, setNewPlaylistName] = useState('');

  const handleCreatePlaylist = () => {
    onPlaylistCreate(newPlaylistName);
    setNewPlaylistName('');
  };

  return (
    <div>
      <h2>Playlist Manager</h2>
      <div>
        <h3>Create Playlist</h3>
        <input
          type="text"
          placeholder="Enter playlist name"
          value={newPlaylistName}
          onChange={(e) => setNewPlaylistName(e.target.value)}
        />
        <button onClick={handleCreatePlaylist}>Create</button>
      </div>
      <div>
        <h3>Your Playlists</h3>
        <ul>
          {playlists.map((playlist, index) => (
            <li key={index}>
              {playlist.name}
              <button onClick={() => onPlaylistEdit(index)}>Edit</button>
              <button onClick={() => onPlaylistDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PlaylistManager;
