import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar: React.SFC = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!isOpen);
    if (!isOpen) {
      // If opening navbar now, prepare to close it on next click
      document.addEventListener("click", () => setOpen(false), { once: true });
    }
  };
  return (
    <nav className="navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img src="https://i.imgur.com/aXdnZnn.png" alt="Convoke" />
            </a>
          </Link>
          <a
            role="button"
            className={"navbar-burger" + (isOpen ? " is-active" : "")}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleOpen}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarId"
          className={"navbar-menu" + (isOpen ? " is-active" : "")}
        >
          <div className="navbar-end">
            <NavLink text="Home" href="/" />
            <NavLink text="About" href="/about" />
            <NavLink text="Content" href="/content" />
            <a className="navbar-item is-tab" onClick={scrollToFooter}>
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
      >
        {props.text}
      </a>
    </Link>
  );
};

const scrollToFooter = () =>
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
