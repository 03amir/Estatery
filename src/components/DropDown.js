import React from "react";
import "../styles/DropDown.css";

function DropDown({ heading, alloptions, setselectedOption }) {
  return (
    <div className="dropDownFrame">
      <h3 className="small">{heading}</h3>
      <select
        onChange={(e) => {
          let val = null;
          if(e.target.value === "Not Selected"){
            val = null;
          }
          else{
            val = e.target.value;
          }
          setselectedOption(val);
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
