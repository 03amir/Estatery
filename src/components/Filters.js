import React from "react";
import DropDown from "./DropDown";
import "../styles/Filters.css";
import { TiCalendarOutline } from "react-icons/ti";

function Filters({
  categories,
  locations,
  setSelectedLocations,
  setselectedCategory,
  setselectedPrice,
  setSelectedMoveInDate,
  filterHandlr,
}) {
  return (
    <div className="filterFrame">
     
     {/* Location dropdown filter */}
      <DropDown
        alloptions={locations}
        heading="Location"
        setselectedOption={setSelectedLocations}
      />

      {/* Move In Date filter  */}
      <div className="dropDownFrame">
        <h3 className="small">When</h3>
        <div className="date">
          <p>Select Move-in-Date</p>

          <div className="calender">
            <TiCalendarOutline className="violate" />
            <input
              type="date"
              name="moveInDate"
              onChange={(e) => {
                setSelectedMoveInDate(e.target.value);
              }}
            />
          </div>
        </div>
      </div>


      {/* Price filter  */}
      <div className="dropDownFrame">
        <h3 className="small">Price</h3>
        <select
          onChange={(e) => {
            setselectedPrice(e.target.value);
          }}
        >
          <option value={-1}>Not Selected</option>
          <option value={1000}>$ 0 - $ 1000</option>
          <option value={2000}>$ 1000 - $ 2000</option>
          <option value={3000}>$ 2000 - $ 3000</option>
        </select>
      </div>


      {/* Property type dropdown filter */}
      <DropDown
        alloptions={categories}
        heading="Property Type"
        setselectedOption={setselectedCategory}
      />

      <button onClick={filterHandlr}> Search </button>

    </div>
  );
}
export default Filters;
