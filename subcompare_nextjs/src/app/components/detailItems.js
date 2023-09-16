import InformationIcon from "../iconSVG/informationIcon.js"
import { useContext } from "react";
import CategoryContext from "./categoryContext.js";
import styles from '../home.module.css';

export default function DetailItems() {

    const { currentCategory } = useContext(CategoryContext);

    let services;
    if (currentCategory === "OTT / Streaming") {
        services = ["Netflix", "Hulu", "Disney+", "Paramount+", "HBO Max", "Peacock", "Discovery+", "Apple TV+", "Vudu", "Roku Channel", "Sling TV"];
    } else if (currentCategory === "Music") {
        services = ["Apple Music", "Spotify", "Tidal", "Youtube Music", "Deezer", "SoundCloud Go+"];
    } else if (currentCategory === "Fitness") {
        services = ["24 Hour Fitness", "LA Fitness", "Gold's Gym", "Planet Fitness", "Anytime Fitness"];
    } else if (currentCategory === "E-Book and Audiobook") {
        services = ["Audible", "Kindle Unlimited", "Scribd"];
    } else if (currentCategory === "Learning / Course Platforms") {
        services = ["Udemy", "Coursera", "LinedIn Learning", "MasterClass"];
    } else if (currentCategory === "Magazine / News Subscription") {
        services = ["New York Times", "The Economist", "National Geographic", "The Wall Street Journal"];
    } else if (currentCategory === "Meal Kit / Food Delivery") {
        services = ["Blue Apron", "HelloFresh", "DoorDash Pass", "Uber Eat Pass"];
    } else if (currentCategory === "Dating App") {
        services = ["Tinder Gold/Plus", "Bumble Boost", "OkCupid A-List"];
    } else {
        services = [];
    }

    return (
        <div className={styles.flexCol}>
            {services.map((service, index) => <InformationIcon key={index} />)}
        </div>
    )
}