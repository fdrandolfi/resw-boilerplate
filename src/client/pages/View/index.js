import React from "react";
import classnames from "classnames";

import "./index.scss";

const View = ({ id, className, children }) => (
  <div id={id} className={classnames('view', className)}>
    {children}
  </div>
);

export default View;
