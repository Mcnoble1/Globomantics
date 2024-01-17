import { useEffect, useState, useMemo } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/HouseFromQuery';
function App() {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch('/houses.json');
      const houses = await response.json();
      setHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if (houses.length) {
      let randomIndex = Math.floor(Math.random() * houses.length);
      return houses[randomIndex];
    }
  }, [houses]);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter houses={houses} />
        <Routes>
          <Route path="/" element={<FeaturedHouse house={featuredHouse} />} /> 
          <Route path="/house/:id" element={<HouseFromQuery houses={houses} />} />
          <Route path="/searchresults/:country" element={<SearchResults houses={houses} />} />        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
