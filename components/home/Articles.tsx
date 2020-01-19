import React from "react";

export const Articles: React.SFC = () => (
  <section className="articles section">
    <div className="container">
      <div className="title is-3">Featured Articles</div>
      <div className="columns is-mobile is-multiline">
        <div className="column is-half-mobile">
          <a
            target="_blank"
            href="https://open.spotify.com/episode/2ggLSpSan9ZGs27ALt4yNH?si=qNhiOc7SS0y6Ku9k0XTjQw"
            title="Spotify - The Summoning Hour ft. Gary Gonzalez of Convoke"
          >
            <img
              src="https://i.imgur.com/GWMytLhl.jpg"
              alt="The Summoning Hour"
            />
            <p>Podcast: The Summoning Hour ft. Gary Gonzalez of Convoke</p>
          </a>
        </div>
        <div className="column is-half-mobile">
          <a
            target="_blank"
            href="https://www.linkedin.com/pulse/kratos-coco-power-research-trips-gary-gonzalez/"
            title="Of Kratos and Coco: The Power of Research Trips"
          >
            <img src="https://i.imgur.com/ZmQMkpgl.jpg" alt="Case Study" />
            <p>Of Kratos and Coco: The Power of Research Trips</p>
          </a>
        </div>
        <div className="column is-half-mobile">
          <a
            target="_blank"
            href="https://www.linkedin.com/pulse/mentorship-recommended-reading-gary-gonzalez/"
            title="Mentorship & Recommended Reading"
          >
            <img
              src="https://i.imgur.com/aitnQ29l.jpg"
              alt="Recommended Reading"
            />
            <p>Mentorship & Recommended Reading</p>
          </a>
        </div>
        <div className="column is-half-mobile">
          <a
            target="_blank"
            href="https://www.linkedin.com/pulse/bizarre-successful-launch-apex-legends-has-deep-future-gary-gonzalez/"
            title="What Apex Legends Tells Us About The Future of Marketing"
          >
            <img src="https://i.imgur.com/AK2qtudl.jpg" alt="Case Study" />
            <p>What Apex Legends Tells Us About The Future of Marketing</p>
          </a>
        </div>
      </div>
    </div>
  </section>
);
