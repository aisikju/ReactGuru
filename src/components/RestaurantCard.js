import { CDN_URL } from "../utils/constants"; // to import named export

const RestaurantCard = (props) => {
   
    const { name, cuisines, costForTwoMessage, avgRating, sla , cloudinaryImageId } = props.resData.card.card.info;

    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo"
                src={ 
                    CDN_URL+ cloudinaryImageId 
                    }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwoMessage}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard;