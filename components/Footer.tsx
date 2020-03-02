import React from "react";

export const Footer: React.SFC = () => (
  <footer className="section footer">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-12">
          <strong>Convoke</strong>
          &nbsp;
          <em>
            (Your creatures can help cast this spell. Each creature you tap
            while casting this spell pays for ❶ or one mana of that creature's
            color.)
          </em>
        </div>
      </div>
    </div>
  </footer>
);
