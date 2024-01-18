import { useState, useEffect } from 'react';
const useHouses = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const fetchHouses = async () => {
        const response = await fetch('/houses.json');
        const houses = await response.json();
        setHouses(houses);
        };
        fetchHouses();
    }, []);

    return houses;
}

 export default useHouses