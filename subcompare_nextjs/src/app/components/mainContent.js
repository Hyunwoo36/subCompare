"use client"

import styles from '../home.module.css';

import ServiceCategoryColumn from "./serviceCategoryCol.js";
import ServicesColumn from './servicesCol.js';
import PriceColumn from './priceCol.js';
import DetailsColumn from './detailsCol.js';

import React, { useState } from 'react';
import CategoryContext from './categoryContext.js';


export default function MainContent() {

    const [currentCategory, setCurrentCategory] = useState("OTT / Streaming");

    return (
        <CategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
            <div className={styles.mainContainer}>
                <ServiceCategoryColumn />
                <ServicesColumn />
                <PriceColumn />
                <DetailsColumn />
            </div>
        </CategoryContext.Provider>
    );
}