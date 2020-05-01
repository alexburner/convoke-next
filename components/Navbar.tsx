import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar: React.SFC = () => {
  const [isActive, setActive] = useState(false);
  const toggleActive = () => setActive(!isActive);
  const makeInactive = () => setActive(false);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item" onClick={makeInactive}>
              <img src="https://i.imgur.com/aXdnZnn.png" alt="Convoke" />
            </a>
          </Link>
          <a
            role="button"
            className={"navbar-burger" + (isActive ? " is-active" : "")}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleActive}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarId"
          className={"navbar-menu" + (isActive ? " is-active" : "")}
        >
          <div className="navbar-end">
            <NavLink text="Home" href="/" onClick={makeInactive} />
            <NavLink text="About" href="/about" onClick={makeInactive} />
            <NavLink text="Content" href="/content" onClick={makeInactive} />
            <a
              className="navbar-item is-tab"
              onClick={() => {
                makeInactive();
                scrollToFooter();
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.SFC<{
  href: string;
  text: string;
  onClick: () => void;
}> = (props) => {
  const router = useRouter();
  const isActive = router.pathname === props.href;
  return (
    <Link href={props.href}>
      <a
        className={[
          "navbar-item",
          "is-tab",
          isActive ? "is-active" : undefined,
        ].join(" ")}
        onClick={props.onClick}
      >
        {props.text}
      </a>
    </Link>
  );
};

const scrollToFooter = () =>
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
