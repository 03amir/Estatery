import React from "react";
import "../styles/DropDown.css";

function DropDown({ heading, alloptions, setselectedOption }) {
  return (
    <div className="dropDownFrame">
      <h3 className="small">{heading}</h3>
      <select
        onChange={(e) => {
          setselectedOption(e.target.value);
        }}
      >
        {alloptions.map((option,id) => {
          return <option value={option} key={id}>{option}</option>;
        })}
      </select>
    </div>
  );
}

export default DropDown;
