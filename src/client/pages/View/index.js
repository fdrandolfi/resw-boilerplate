import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.scss';

const View = ({ id, className, children }) => (
  <div id={id} className={classnames('view', className)}>
    {children}
  </div>
);

View.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default View;
