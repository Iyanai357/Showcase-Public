import { useNavigate } from 'react-router-dom'
import { NavBar, Alcohol, Calculator, Hero } from './components'
import styles from "./style";

const LandingPage = () => (
    <>
 
 <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>
     <Hero/>
     <Alcohol/>
     <Calculator/>
    </>
  )

export default LandingPage