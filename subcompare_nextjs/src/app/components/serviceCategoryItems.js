import TriangleIcon from "../iconSVG/triangleSVG";
import styles from '../home.module.css';

export default function ServiceCategoryItems() {
    return (
        <div>
            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}`}><TriangleIcon className={styles.marginRight}/>OTT / Streaming</div>
            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}`}><TriangleIcon className={styles.marginRight}/>Music</div>
            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}`}><TriangleIcon className={styles.marginRight}/>Firtness</div>
            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}`}><TriangleIcon className={styles.marginRight}/>E-Book and Audiobook</div>
            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}`}><TriangleIcon className={styles.marginRight}/>Learning and Course Platforms</div>
            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}`}><TriangleIcon className={styles.marginRight}/>Magazine and News Subscription</div>
            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}`}><TriangleIcon className={styles.marginRight}/>Meal Kit and Food Delivery</div>
            <div className={`${styles.flexAlignItemsCenter} ${styles.fontLarger}`}><TriangleIcon className={styles.marginRight}/>Dating App</div>
        </div>
    )
}