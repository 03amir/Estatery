import React from "react";
import { useState} from "react";
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

  let updatedProperties = dataList;

  function filterHandlr() {
    // for property type filter
    if (selectedCategory) {
      if (selectedCategory !== "Not Selected") {
        updatedProperties = updatedProperties.filter((item) => {
          return item.type === selectedCategory;
        });
      }
    }

    // for city filter
    if (selectedlocation) {
      if (selectedlocation !== "Not Selected") {
        updatedProperties = updatedProperties.filter((item) => {
          return item.city === selectedlocation;
        });
      }
    }

    // for price filter
    if (selectedPrice) {
      if (selectedPrice !== -1) {
        updatedProperties = updatedProperties.filter((item) => {
          return (
            item.price <= selectedPrice && item.price >= selectedPrice - 1000
          );
        });
      }
    }

    // for move in date filter
    if (selectedMoveInDate) {
      const [year, month, day] = selectedMoveInDate.split("-");
      const selectedDate = new Date(+year, month - 1, +day);

      updatedProperties = updatedProperties.filter((item) => {
        const [day, month, year] = item.freeFrom.split("/");
        const itemDate = new Date(+year, month - 1, +day);

        return itemDate <= selectedDate;
      });
    }

    setPropertis(updatedProperties);
  }

  function searchHandlr(e) {
    if (e.target.value === "") {
      filterHandlr();
    } else {
      filterHandlr();
      let searchedData = updatedProperties.filter((item) => {
        return item.title
          .toLowerCase()
          .includes(e.target.value.toLowerCase().trim());
      });

      setPropertis(searchedData);
    }

    setSelectedInput(e.target.value);
  }

  return (
    <div className="rentFrame">
      <div className="searchHeading">
        <h1>Search properties to rent</h1>
        <input
          type="text"
          placeholder="Search any property"
          value={selectedInput}
          onInput={(e) => {
            searchHandlr(e);
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
          return <PopertyCard property={property} key={property.id}/>;
        })}
      </div>


    </div>
  );
}

export default Rent;
