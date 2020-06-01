import React from "react";
import AnimalCard from "./animal/AnimalCard";
import "./Kennel.css";
import LocationCard from "./animal/LocationCard";
import OwnerCard from "./animal/OwnerCard";
import EmployeeCard from "./animal/EmployeeCard";
const Kennel = () => {
  return (
    <div>
      <div>
        <h2>
          Student Kennels
          <br />
          <small>Loving care when you're not there.</small>
        </h2>
        <address>
          Visit Us at the Nashville North Location
          <br />
          <LocationCard />
        </address>
      </div>
      <div>
        <AnimalCard />
        <OwnerCard />
        <EmployeeCard />
      </div>
    </div>
  );
};

export default Kennel;
