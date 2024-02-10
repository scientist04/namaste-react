import RestaurantCard from "./RestaurantCard";
import restrautList from "../utils/mockData";
import { useState } from "react";

// no key (not acceptable) <<< index key(last option) <<<<< unquie key (best practice)
const Body = () => {

    //Normal Js Variable
    // let listOfRestaurants2 = [
    //     {
    //       data: {
    //         id: "73011",
    //         name: "KFC",
    //         cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    //         cuisines: ["American", "Snacks", "Biryani"],
    //         costForTwo: 30000,
    //         deliveryTime: 31,
    //         deliveryTime: 31,
    //         avgRating: "4.1",
    //         }  
    //     },
    //     {
    //       data: {
    //         id: "73012",
    //         name: "Dominos",
    //         cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    //         cuisines: ["American", "Snacks", "Biryani"],
    //         costForTwo: 30000,
    //         deliveryTime: 31,
    //         deliveryTime: 31,
    //         avgRating: "4.5",
    //         }  
    //     },
    //     {
    //       data: {
    //         id: "73013",
    //         name: "MCD",
    //         cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    //         cuisines: ["American", "Snacks", "Biryani"],
    //         costForTwo: 30000,
    //         deliveryTime: 31,
    //         deliveryTime: 31,
    //         avgRating: "3.0",
    //         }  
    //     },
    // ]

    //local state Variable = Super Powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(restrautList);

    return (
        <div className="body">
            <div className="filter">
                <button
                    onClick={() => {
                        //filter logic
                        const filterData = listOfRestaurants.filter(
                            (res) => res.data.avgRating > 4
                        );
                        setListOfRestaurants(filterData);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurent) => (
                        <RestaurantCard key={restaurent.data.id} resData={restaurent} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;