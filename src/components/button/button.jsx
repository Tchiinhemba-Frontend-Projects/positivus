import React from "react";

export function Button(props) {
  const { type, children, size, className } = props;
  const classButton = `btn btn-${type} btn-${size} ${className}`;

  return (
    <React.Fragment>
      <button className={classButton}>{children}</button>
    </React.Fragment>
  );
}
