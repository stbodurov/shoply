import React from 'react';
import './styles.scss';

export default function Button({ children, ...otherProps }) {
    return (
        <button className="btn" {...otherProps}>
            {children}
        </button>
    )
}
