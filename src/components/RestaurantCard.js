import { CDN_URL } from "../utils/constants"; // to import named export

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    sla,
    cloudinaryImageId,
  } = props.resData.card.card.info;

  return (
    <div className="m-4 p-4 w-[200px] h-[480px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img className="" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-l">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwoMessage}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

// Higer Order Componenet

// input - restaurantCard =>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
