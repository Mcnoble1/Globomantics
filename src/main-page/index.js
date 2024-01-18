import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/HouseFromQuery';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse';
import HousesContext from '../context/housesContext';
function App() {

  const houses = useHouses();
  const featuredHouse = useFeaturedHouse(houses);

  return (
    <Router>
      <HousesContext.Provider value={houses}>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter />
        <Routes>
          <Route path="/" element={<FeaturedHouse house={featuredHouse} />} /> 
          <Route path="/house/:id" element={<HouseFromQuery />} />
          <Route path="/searchresults/:country" element={<SearchResults />} />        
        </Routes>
      </div>
      </HousesContext.Provider>
    </Router>
  );
}

export default App;
