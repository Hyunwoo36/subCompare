import TriangleIcon from "../iconSVG/triangleSVG";
import styles from '../home.module.css';

import { useContext } from 'react';
import CategoryContext from "./categoryContext.js";

export default function ServiceCategoryItems() {

    const { setCurrentCategory } = useContext(CategoryContext);
    return (
        <div>

            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}`}
                onClick={() => setCurrentCategory("OTT / Streaming")}>
                <TriangleIcon className={styles.marginRight} />
                OTT / Streaming
            </div>

            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}`}
                onClick={() => setCurrentCategory("Music")}>
                <TriangleIcon className={styles.marginRight} />
                Music
            </div>

            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}`}
                onClick={() => setCurrentCategory("Fitness")}>
                <TriangleIcon className={styles.marginRight} />
                Fitness
            </div>

            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}`}
                onClick={() => setCurrentCategory("E-Book and Audiobook")}>
                <TriangleIcon className={styles.marginRight} />
                E-Book and Audiobook
            </div>

            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}`}
                onClick={() => setCurrentCategory("Learning / Course Platforms")}>
                <TriangleIcon className={styles.marginRight} />
                Learning / Course Platforms
            </div>

            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}`}
                onClick={() => setCurrentCategory("Magazine / News Subscription")}>
                <TriangleIcon className={styles.marginRight} />
                Magazine / News Subscription
            </div>

            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}`}
                onClick={() => setCurrentCategory("Meal Kit / Food Delivery")}>
                <TriangleIcon className={styles.marginRight} />
                Meal Kit and Food Delivery
            </div>

            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}`}
                onClick={() => setCurrentCategory("Dating App")}>
                <TriangleIcon className={styles.marginRight} />
                Dating App
            </div>

        </div>
    )
}