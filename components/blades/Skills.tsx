import React from "react";

export const Skills: React.SFC = () => (
  <section className="skills section">
    <div className="container has-text-centered">
      <div className="title is-2">Core Competencies</div>
      <div className="columns is-multiline is-centered">
        <Skill
          title="Strategy"
          text="Research, audience insights, go-to-market strategy, brand strategy"
          icon="chess-bishop"
        />
        <Skill
          title="Creative"
          text="Branding, content development, video production, graphic and visual design"
          icon="ghost"
        />
        <Skill
          title="Digital Marketing"
          text="Paid media, social media, search, display, ecomm and analytics"
          icon="crosshairs"
        />

        <Skill
          title="Community Management"
          text="Influencer marketing, customer care, editorial development and deployment"
          icon="gamepad"
        />
        <Skill
          title="Web Development"
          text="Websites, app development, CMS, custom integrations, email"
          icon="laptop-code"
        />
      </div>
    </div>
  </section>
);

const Skill: React.SFC<{
  title: string;
  text: string;
  icon: string;
}> = ({ title, text, icon }) => (
  <div className="column is-4">
    <p className="title is-3">
      <span className="fa-stack fa-2x">
        <i className="fas fa-circle fa-stack-2x"></i>
        <i className={`fas fa-${icon} fa-stack-1x`}></i>
      </span>
    </p>
    <div className="title is-4">{title}</div>
    <div className="subtitle is-6">{text}</div>
  </div>
);
