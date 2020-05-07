import React from 'react';
import Input from './Input';

const Form = ({handleSubmit,handleName, handleColor, handleNum, handleImg,nameVal, colorVal, numVal, name, color, numEmployees,imgUrl}) => {
    return (
        <form className="col-5" onSubmit={(e) => handleSubmit(e)}>
        <h2>Add Boss Hog:</h2>
        <Input 
            name="name"
            value={name}
            error={nameVal}
            label="Name: "
            type="text"
            handleChange={handleName}

        />
        <Input 
            name="color"
            value={color}
            error={colorVal}
            label="Color: "
            type="text"
            handleChange={handleColor}
        />
        <Input 
            name="numEmployees"
            value={numEmployees}
            error={numVal}
            label="# of Employees: "
            type="text"
            handleChange={handleNum}
        />
        <div className="form-group">
          <label htmlFor="imgUrl">Img Url:</label>
          <input 
            type="text" 
            className="form-control"
            name="imgUrl"
            value={imgUrl}
            onChange={(e) => handleImg(e.target.value)}
          />
        </div>
        {
          name.length > 2 && color.length > 2 && numEmployees >=0 ?
          <input 
            type="submit" 
            value="Submit" 
            className="btn btn-warning btn-outline-danger"
          /> :
            <input 
              type="submit" 
              value="Submit" 
              className="btn btn-warning btn-outline-danger"
              disabled
            />
        }
        
      </form>
    );

}

export default Form;