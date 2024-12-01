import React from "react";

export function Heading({ type, children }) {
  const headingClass = `heading heading-${type}`;

  return (
    <React.Fragment>
      <div className={headingClass}>
        <span className="heading-container">{children}</span>
      </div>
    </React.Fragment>
  );
}
