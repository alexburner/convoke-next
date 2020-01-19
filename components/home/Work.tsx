import React from "react";

export const Work: React.SFC = () => (
  <section className="work section">
    <div className="container">
      <div className="title is-3">Recent Work</div>
      {/* US Army | Brand Planning NON-SMALL ONLY */}
      <div className="columns is-multiline is-hidden-touch is-hidden-desktop-only">
        <div className="column is-full-mobile is-full-tablet is-full-desktop is-one-quarter-widescreen is-one-quarter-fullhd">
          <div className="title is-5">US Army | Brand Planning</div>
          <p>
            Working in support of the US Army and Airforce at Joint Base
            Lewis-McChord, Convoke was retained to develop branding for the
            Warrior Zone Majors. Inspired by the event’s pacific northwest
            roots, Convoke developed a gritty brand identity that was brought to
            life with a Twitch broadcast package, onsite assets and digital
            marketing support. Operated by Atomic Infotech, the Warrior Zone
            Majors will continue throughout 2019 with Smash Bros, Call of Duty,
            Madden and NBA2K.
          </p>
        </div>
        <div className="column is-full-mobile is-full-tablet is-full-desktop is-three-quarters-widescreen is-three-quarters-fullhd">
          <div id="carousel-us-army" className="carousel-media">
            <div className="carousel-media-cell">
              <video autoPlay loop muted playsInline>
                <source
                  src="https://i.imgur.com/k4mLihm.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="carousel-media-cell">
              <img src="https://i.imgur.com/aUjpKBo.jpg" />
            </div>
            <div className="carousel-media-cell">
              <video autoPlay loop muted playsInline>
                <source
                  src="https://i.imgur.com/jmHNT1f.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="carousel-media-cell">
              <img src="https://i.imgur.com/97cgL6E.jpg" />
            </div>
            <div className="carousel-media-cell">
              <video autoPlay loop muted playsInline>
                <source
                  src="https://i.imgur.com/RALKiby.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* US Army | Brand Planning SMALL ONLY */}
      <div className="columns is-multiline is-hidden-widescreen">
        <div className="column is-full-mobile is-full-tablet is-full-desktop is-three-quarters-widescreen is-three-quarters-fullhd">
          <div id="carousel-us-army-small" className="carousel-media">
            <div className="carousel-media-cell">
              <video autoPlay loop muted playsInline>
                <source
                  src="https://i.imgur.com/k4mLihm.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="carousel-media-cell">
              <img src="https://i.imgur.com/aUjpKBo.jpg" />
            </div>
            <div className="carousel-media-cell">
              <video autoPlay loop muted playsInline>
                <source
                  src="https://i.imgur.com/jmHNT1f.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="carousel-media-cell">
              <img src="https://i.imgur.com/97cgL6E.jpg" />
            </div>
            <div className="carousel-media-cell">
              <video autoPlay loop muted playsInline>
                <source
                  src="https://i.imgur.com/RALKiby.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div className="column is-full-mobile is-full-tablet is-full-desktop is-one-quarter-widescreen is-one-quarter-fullhd">
          <div className="title is-5">US Army | Brand Planning</div>
          <p>
            Working in support of the US Army and Airforce at Joint Base
            Lewis-McChord, Convoke was retained to develop branding for the
            Warrior Zone Majors. Inspired by the event’s pacific northwest
            roots, Convoke developed a gritty brand identity that was brought to
            life with a Twitch broadcast package, onsite assets and digital
            marketing support. Operated by Atomic Infotech, the Warrior Zone
            Majors will continue throughout 2019 with Smash Bros, Call of Duty,
            Madden and NBA2K.
          </p>
        </div>
      </div>
      {/* Thrival Festival | Social Media Marketing */}
      <div className="columns is-multiline">
        <div className="column is-full-mobile is-full-tablet is-full-desktop is-three-quarters-widescreen is-three-quarters-fullhd">
          <div id="carousel-game-stack" className="carousel-media">
            <div className="carousel-media-cell">
              <img src="https://i.imgur.com/5jguqmf.jpg" />
            </div>
          </div>
        </div>
        <div className="column is-full-mobile is-full-tablet is-full-desktop is-one-quarter-widescreen is-one-quarter-fullhd">
          <div className="title is-5">
            Thrival Festival | Social Media Marketing
          </div>
          <p>
            Formerly a music festival, Thrival approached Convoke after
            completing a rebrand that positioned them as one of the East Coast’s
            premier tech and innovation conferences. Our task was to help
            Thrival reach a completely new audience and guide them from
            awareness to registration. Utilizing AI-driven audience
            segmentation, we built an integrated social campaign that drove
            nearly 10,000 engagements and over 500 ticket sales for the event.
          </p>
        </div>
      </div>
    </div>
  </section>
);
