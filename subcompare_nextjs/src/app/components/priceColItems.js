import { useContext, useEffect, useState } from "react";
import CategoryContext from "./categoryContext.js";
import dataAll from "../data/data.js";
import styles from '../home.module.css';

export default function PriceColumnItems() {
    const { currentCategory } = useContext(CategoryContext);
    const [prices, setPrices] = useState({});

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch('/api/scrapePrices');
    //         const data = await response.json();

    //         setPrices(prevPrices => ({
    //             ...prevPrices,
    //             "Netflix": data.lowestPrice
    //         }));
    //     }
    //     fetchData();
    // }, []);

    let serviceData = dataAll[currentCategory];
    let serviceNames;
    if (serviceData) {
        serviceNames = Object.keys(serviceData);
    } else {
        serviceNames = ["Service Unavailable"];
    }
    return (
        <div className={`${styles.serviceItemPadding} ${styles.fontLarger}`}>
            {serviceNames.map((name, index) => (
                <div key={index}>
                    $ {prices[name] ? prices[name] : (serviceData ? serviceData[name].price : "Price Unavailable")}
                </div>
            ))}
        </div>
    )
}