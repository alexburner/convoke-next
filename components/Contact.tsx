import React from "react";

export const Contact: React.SFC = () => (
  <div id="contact" className="section contact">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-8">
          <div className="title is-3">Contact us</div>
          <form action="https://formspree.io/gary@convoke.gg" method="POST">
            <div className="field is-grouped">
              <div className="control is-expanded has-icons-left">
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <div className="control is-expanded has-icons-left">
                <input
                  className="input"
                  type="email"
                  name="_replyto"
                  placeholder="Email address"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <input className="button" type="submit" value="Send" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
