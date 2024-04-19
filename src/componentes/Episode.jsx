import React, { useState, useEffect } from "react";
import "./Episode.css";

const Episode = ({ character }) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodeData = async (episodeUrl) => {
      const response = await fetch(episodeUrl);
      const episodeData = await response.json();
      return episodeData;
    };

    const fetchEpisodes = async () => {
      if (character.episode && character.episode.length > 0) {
        const episodePromises = character.episode.slice(0, 9).map(fetchEpisodeData);
        const episodeData = await Promise.all(episodePromises);
        setEpisodes(episodeData);
      }
    };

    fetchEpisodes();
  }, [character.episode]);

  return (
    <div className="informacion-extra">
      {episodes.length > 0 && (
        episodes.map((episode, index) => (
          <div key={index} className="episode-info">
            <p> {episode.air_date}</p>
            <p> {episode.episode}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Episode;