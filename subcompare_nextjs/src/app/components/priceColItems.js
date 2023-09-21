import { useContext, useEffect, useState } from "react";
import CategoryContext from "./categoryContext.js";
import dataAll from "../data/data.js";
import styles from '../home.module.css';

export default function PriceColumnItems() {
    const { currentCategory } = useContext(CategoryContext);
    const [prices, setPrices] = useState({
        "Netflix": "Fetching..."
    });

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/scrapePrices');
            const data = await response.json();

            setPrices(prevPrices => ({
                ...prevPrices,
                "Netflix": data.lowestPrice
            }));
        }
        fetchData();
    }, []);

    let serviceData = dataAll[currentCategory];
    let servicePrices;
    if (serviceData) {
        servicePrices = Object.values(serviceData).map(service => service.price);
    } else {
        servicePrices = ["Price Unavailable"];
    }
    return (
        <div className={`${styles.serviceItemPadding} ${styles.fontLarger}`}>
            {servicePrices.map((price, index) => <div key={index}>$ {price}</div>)}
        </div>
    )
}