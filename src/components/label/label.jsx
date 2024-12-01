import React from "react";

export function Label({children}) {
  return (
    <React.Fragment>
      <div className="label_wrapper">
        <span>{children}</span>
      </div>
    </React.Fragment>
  );
}
