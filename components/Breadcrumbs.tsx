import React from "react";
import Link from "next/link";

export const Breadcrumbs: React.SFC<{
  crumbs: { text: string; href: string }[];
}> = ({ crumbs }) => (
  <nav
    className="breadcrumb"
    aria-label="breadcrumbs"
    style={{
      marginTop: "-2em",
    }}
  >
    <ul>
      {crumbs.map((crumb, i) => (
        <li className={i === crumbs.length - 1 ? "is-active" : ""}>
          <Link href={crumb.href}>
            <a>{crumb.text}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
