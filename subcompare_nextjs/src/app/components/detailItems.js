import InformationIcon from "../iconSVG/informationIcon.js"
import { useContext, useState } from "react";
import CategoryContext from "./categoryContext.js";
import styles from '../home.module.css';
import dataAll from "../data/data.js";

function InfoModal({ onClose, service, currentCategory }) {
    const details = (dataAll[currentCategory] && dataAll[currentCategory][service]
        && dataAll[currentCategory][service].details) ? dataAll[currentCategory][service].details : "Details not available";

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

    let services = dataAll[currentCategory] ? Object.keys(dataAll[currentCategory]) : [];

    return (
        <div className={`${styles.flexCol} ${styles.informationPadding}`}>
            {showModal && <InfoModal onClose={() => setShowModal(false)} service={selectedService} currentCategory={currentCategory} />}
            {services.map((service, index) => (
                <div key={index} onClick={() => { setShowModal(true); setSelectedService(service); }} >
                    <InformationIcon className={styles.cursor} />
                </div>
            ))}
        </div>
    )
}