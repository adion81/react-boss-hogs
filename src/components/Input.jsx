import React from 'react';

const Input = ({type,name,value,label,handleChange,error}) => {


    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                className="form-control"
                name={name}
                onChange={handleChange}
                value={value}
            />
            {
                error ? <span className="text-danger">{error}</span> :
                    null
            }
        </div>
    );
}

export default Input;