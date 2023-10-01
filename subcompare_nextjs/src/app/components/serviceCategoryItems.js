import TriangleIcon from "../iconSVG/triangleSVG";
import styles from '../home.module.css';

import { useContext } from 'react';
import CategoryContext from "./categoryContext.js";

export default function ServiceCategoryItems() {

    const { currentCategory, setCurrentCategory } = useContext(CategoryContext);
    return (
        <div className={styles.serviceCategoryPadding}>

            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}
            ${currentCategory === "OTT / Streaming" ? styles.bold : ""}`}
                onClick={() => setCurrentCategory("OTT / Streaming")}>
                <TriangleIcon className={`${styles.marginRight} ${styles.triangleIconSize}`} />
                OTT / Streaming
            </div>

            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}
            ${currentCategory === "Music" ? styles.bold : ""}`}
                onClick={() => setCurrentCategory("Music")}>
                <TriangleIcon className={`${styles.marginRight} ${styles.triangleIconSize}`} />
                Music
            </div>

            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}
            ${currentCategory === "Fitness" ? styles.bold : ""}`}
                onClick={() => setCurrentCategory("Fitness")}>
                <TriangleIcon className={`${styles.marginRight} ${styles.triangleIconSize}`} />
                Fitness
            </div>

            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}
            ${currentCategory === "E-Book and Audiobook" ? styles.bold : ""}`}
                onClick={() => setCurrentCategory("E-Book and Audiobook")}>
                <TriangleIcon className={`${styles.marginRight} ${styles.triangleIconSize}`} />
                E-Book and Audiobook
            </div>

            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}
            ${currentCategory === "Learning / Course Platforms" ? styles.bold : ""}`}
                onClick={() => setCurrentCategory("Learning / Course Platforms")}>
                <TriangleIcon className={`${styles.marginRight} ${styles.triangleIconSize}`} />
                Learning / Course Platforms
            </div>

            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}
            ${currentCategory === "Magazine / News Subscription" ? styles.bold : ""}`}
                onClick={() => setCurrentCategory("Magazine / News Subscription")}>
                <TriangleIcon className={`${styles.marginRight} ${styles.triangleIconSize}`} />
                Magazine / News Subscription
            </div>

            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}
            ${currentCategory === "Meal Delivery / Kit" ? styles.bold : ""}`}
                onClick={() => setCurrentCategory("Meal Delivery / Kit")}>
                <TriangleIcon className={`${styles.marginRight} ${styles.triangleIconSize}`} />
                Meal Delivery / Kit
            </div>

            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}
            ${currentCategory === "Food Delivery" ? styles.bold : ""}`}
                onClick={() => setCurrentCategory("Food Delivery")}>
                <TriangleIcon className={`${styles.marginRight} ${styles.triangleIconSize}`} />
                Food Delivery
            </div>

            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}
            ${currentCategory === "Dating App" ? styles.bold : ""}`}
                onClick={() => setCurrentCategory("Dating App")}>
                <TriangleIcon className={`${styles.marginRight} ${styles.triangleIconSize}`} />
                Dating App
            </div>

        </div>
    )
}