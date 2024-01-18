import SearchResultsRow from "./search-results-row";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import HouseContext from "../context/housesContext";
const SearchResults = () => {
  const houses = useContext(HouseContext);
  const { country } = useParams();
  const filteredHouses = houses.filter((h) => h.country === country);

  return (
    <div className="mt-2">
      <h4>Results for {country}:</h4>
      <table className="table table-hover">
        <tbody>
          {filteredHouses.map((h) => (
            <SearchResultsRow key={h.id} house={h} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
