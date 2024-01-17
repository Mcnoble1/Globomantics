import { useNavigate } from "react-router-dom";
const HouseFilter = ( { houses }) => {
    const navigate = useNavigate();
    const countries = houses ? Array.from(new Set(houses.map((h) => h.country))) : [];
    countries.unshift(null);
    const onSearchChange = (e) => {
        const country = e.target.value;
        navigate(`/searchresults/${country}`);
    };

    return (
        <div className="form-group row mt-3">
            <div className="offset-md-2 col-md-4">
                Look for your dream house in country:
            </div>
            <div className="col-md-4 mb-3">
                <select className="form-control" onChange={onSearchChange}>
                    {countries.map((c) => (
                        <option value={c} key={c}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
 
export default HouseFilter;