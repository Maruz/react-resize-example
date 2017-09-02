import React from 'react';
import PropTypes from 'prop-types';

const Col = props => (
    <div className={`col-sm-${props.sm}`}>
        {props.children}
    </div>
);

Col.propTypes = {
    children: PropTypes.node,
    sm: PropTypes.number,
};

export default Col;
