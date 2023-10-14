import React, { useState, useRef } from 'react';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const songs = [
    {
      title: 'Song 1',
      source: '/music/song1.mp3',
    },
    {
      title: 'Song 2',
      source: '/music/song2.mp3',
    }
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];

  const playPauseToggle = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    } else {
      setCurrentSongIndex(0);
    }
  };

  const previousSong = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    } else {
      setCurrentSongIndex(songs.length - 1);
    }
  };

  return (
    <div className="music-player">
      <h2>Now Playing: {currentSong.title}</h2>
      <audio ref={audioRef} controls autoPlay={isPlaying} onEnded={nextSong}>
        <source src={currentSong.source} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="controls">
        <button onClick={previousSong}>Previous</button>
        <button onClick={playPauseToggle}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={nextSong}>Next</button>
      </div>
    </div>
  );
}

export default MusicPlayer;