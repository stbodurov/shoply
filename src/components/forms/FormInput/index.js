import React from 'react'
import './styles.scss';

export default function FormInput({handleChange, label, ...otherProps}) {
    return (
        <div className="formRow">
            {label && (
                <label>
                    {label}
                </label>
            )}

            <input className="formInput" onChange={handleChange} {...otherProps}/>
        </div>
    )
}
