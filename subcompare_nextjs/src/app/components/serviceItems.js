import { useContext } from 'react';
import CategoryContext from './categoryContext.js';
import styles from '../home.module.css';
import dataAll from '../data/data.js';

export default function ServiceItems() {
    const { currentCategory } = useContext(CategoryContext);

    let servicesData = dataAll[currentCategory];
    let services;
    if (servicesData) {
        services = Object.keys(servicesData);
    } else {
        services = ["Nothing more!"];
    }

    return (
        <div className={`${styles.serviceItemPadding} ${styles.fontLarger}`}>
            {services.map(service => <div key={service}>{service}</div>)}
        </div>
    )
}