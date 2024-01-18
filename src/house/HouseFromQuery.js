import { useParams } from "react-router-dom";
import House from "./";
import { useContext } from "react";
import HouseContext from "../context/housesContext";
const HouseFromQuery = () => {
  const houses = useContext(HouseContext);
  const { id } = useParams();
  const house = houses.find((h) => h.id === parseInt(id));

  if (!house) return <div>House not found.</div>;
  return <House house={house}></House>;
};

export default HouseFromQuery;
