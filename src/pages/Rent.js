import React from "react";
import { useState } from "react";
import Filters from "../components/Filters";
import "../styles/Rent.css";
import { dataList } from "../dummyData/data";
import PopertyCard from "../components/PopertyCard";

//setting the property type dynamically
const categoriesToFilter = [
  "Not Selected",
  ...new Set(dataList.map((item) => item.type)),
];

//setting the availabel locations dynamically
const locationsToFilter = [
  "Not Selected",
  ...new Set(dataList.map((item) => item.city)),
];

function Rent(props) {
  const [properties, setPropertis] = useState(dataList);

  const [selectedCategory, setselectedCategory] = useState(null);
  const [selectedMoveInDate, setSelectedMoveInDate] = useState(null);
  const [selectedlocation, setSelectedLocations] = useState(null);
  const [selectedPrice, setselectedPrice] = useState(null);
  const [selectedInput, setSelectedInput] = useState("");

  const filterHandlr = () => {
    let [minPrice, maxPrice] = [0, 3000];
    if (selectedPrice) {
      [minPrice, maxPrice] = selectedPrice.split(",");
    }

    const selectedDate = new Date(selectedMoveInDate);

    const filteredHotels = dataList.filter((hotel) => {
      const [day, month, year] = hotel.freeFrom.split("/").map(Number);
      const jsDate = new Date(year, month - 1, day);

      return (
        (selectedlocation === null || hotel.city === selectedlocation) &&
        (selectedPrice === null ||
          (hotel.price >= parseInt(minPrice) &&
            hotel.price <= parseInt(maxPrice))) &&
        (selectedCategory === null || hotel.type === selectedCategory) &&
        (selectedMoveInDate === null || selectedDate >= jsDate) &&
        (selectedInput === "" ||
          hotel.title.toLowerCase().includes(selectedInput?.toLowerCase()))
      );
    });

    setPropertis(filteredHotels);
  };

  return (
    <div className="rentFrame">
      <div className="searchHeading">
        <h1>Search properties to rent</h1>
        <input
          type="text"
          placeholder="Search any property"
          value={selectedInput}
          onInput={(e) => {
            setSelectedInput(e.target.value);
          }}
        />
      </div>

      <Filters
        categories={categoriesToFilter}
        locations={locationsToFilter}
        setSelectedLocations={setSelectedLocations}
        setSelectedMoveInDate={setSelectedMoveInDate}
        setselectedCategory={setselectedCategory}
        setselectedPrice={setselectedPrice}
        filterHandlr={filterHandlr}
      />

      <div className="properties">
        {properties.map((property) => {
          return <PopertyCard property={property} key={property.id} />;
        })}
      </div>
    </div>
  );
}

export default Rent;
