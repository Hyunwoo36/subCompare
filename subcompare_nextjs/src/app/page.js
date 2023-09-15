import styles from './home.module.css';
import HeadMain from './components/headMain.js';
import CategoryTitles from './components/categoryTitles';
import ServiceCategory from './components/serviceCategory';

export default function Home() {
  return (
    <div>
      <HeadMain />
      <CategoryTitles />
      <ServiceCategory />
    </div>
  )
}
