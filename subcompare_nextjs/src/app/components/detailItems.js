import InformationIcon from "../iconSVG/informationIcon.js"
import { useContext, useState } from "react";
import CategoryContext from "./categoryContext.js";
import styles from '../home.module.css';

function InfoModal({ onClose, service }) {
    let details;

    switch (service) {
        case "Netflix":
            details = "Netflix details goes here";
            break;
        case "Hulu":
            details = "Hulu details goes here";
            break;
        default:
            details = "Details not available";
    }

    return (
        <div className={styles.modalContainer}>
            <h1>{service} Details</h1>
            <p>{details}</p>
            <span className={styles.closeModal} onClick={onClose}>X</span>
        </div>
    )
}

export default function DetailItems() {

    const { currentCategory } = useContext(CategoryContext);
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

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
        <div className={`${styles.flexCol} ${styles.informationPadding}`}>
            {showModal && <InfoModal onClose={() => setShowModal(false)} service={selectedService} />}
            {services.map((service, index) => (
                <div key={index} onClick={() => { setShowModal(true); setSelectedService(service); }} >
                    <InformationIcon className={styles.cursor} />
                </div>
            ))}
        </div>
    )
}