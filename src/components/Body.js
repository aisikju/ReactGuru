import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //  Local State Variable - Super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Whenever state variables update, react triggers a reconcilation cycle(re-renders the component)
  console.log("Body Rendererd");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("FetchData Rendererd");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9352403&lng=77.624532&str=Indian&trackingId=efd6b9f1-4b8e-cecf-728e-a3f84595bb12&submitAction=ENTER&queryUniqueId=720ab3a2-0138-bf4e-c8c2-c0a8b2b74b88"
    );

    const json = await data.json();

    // Use Optional Chaining
    setlistOfRestaurants(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredlist = listOfRestaurants.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredlist);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.card.card.info.id}
            to={"/restaurants/" + restaurant.card.card.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
