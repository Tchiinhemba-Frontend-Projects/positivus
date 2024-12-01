import React from "react";

export function Heading({ type, title, children }) {
  const headingClass = `heading heading-${type}`;

  return (
    <React.Fragment>
      <div className="heading_wrapper">
        <div className={headingClass}>
          <span className="green">{title}</span>
        </div>

        <div className="heading-description">
          <span>{children}</span>
        </div>
      </div>
    </React.Fragment>
  );
}
