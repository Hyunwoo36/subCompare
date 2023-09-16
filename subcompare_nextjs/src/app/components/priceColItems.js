import { useContext } from "react";
import CategoryContext from "./categoryContext.js";
import prices from "../data/prices.js";

export default function PriceColumnItems() {
    const { currentCategory } = useContext(CategoryContext);
    let servicePrices;
    if (currentCategory === "OTT / Streaming") {
        servicePrices = ["Netflix", "Hulu", "Disney+", "Paramount+", "HBO Max", "Peacock", "Discovery+", "Apple TV+", "Vudu", "Roku Channel", "Sling TV"].map(service => prices[service]);
    } else if (currentCategory === "Music") {
        servicePrices = ["Apple Music", "Spotify", "Tidal", "Youtube Music", "Deezer", "SoundCloud Go+"].map(service => prices[service]);
    } else if (currentCategory === "Fitness") {
        servicePrices = ["24 Hour Fitness", "LA Fitness", "Gold's Gym", "Planet Fitness", "Anytime Fitness"].map(service => prices[service]);
    } else if (currentCategory === "E-Book and Audiobook") {
        servicePrices = ["Audible", "Kindle Unlimited", "Scribd"].map(service => prices[service]);
    } else if (currentCategory === "Learning / Course Platforms") {
        servicePrices = ["Udemy", "Coursera", "LinedIn Learning", "MasterClass"].map(service => prices[service]);
    } else if (currentCategory === "Magazine / News Subscription") {
        servicePrices = ["New York Times", "The Economist", "National Geographic", "The Wall Street Journal"].map(service => prices[service]);
    } else if (currentCategory === "Meal Kit / Food Delivery") {
        servicePrices = ["Blue Apron", "HelloFresh", "DoorDash Pass", "Uber Eat Pass"].map(service => prices[service]);
    } else if (currentCategory === "Dating App") {
        servicePrices = ["Tinder Gold/Plus", "Bumble Boost", "OkCupid A-List"].map(service => prices[service]);
    } else {
        servicePrices = ["Price Unavailable!"];
    }
    return (
        <div>
            {servicePrices.map((price, index) => <div key={index}>$ {price}</div>)}
        </div>
    )
}