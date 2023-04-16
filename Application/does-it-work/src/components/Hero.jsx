import { beer, landingPageDrunk } from '../assets'
import styles from '../style'

const Hero = () => (
  <section
    id="home"
    className={`bg-transparent w-full flex-col ${styles.flexCenter} font-unbounded mt-10 pt-5 pb-5`}
  >

    <div className="flex flex-row">
      <img src={beer} alt="beer" className="animate-bounce w-16 h-11" />
      <h2 className="text-softAmber font-unbounded font-normal sm:text-4xl text-2xl text-center">Internet Alcohol</h2>
      <img src={beer} alt="beer" className="animate-bounce w-16 h-11 ml-2" />
    </div>

    <div className="pt-8 w-full sm:w-2/5 flex justify-center">
      <img src={landingPageDrunk} alt="passed out" className="glow w-full sm:max-w-xs" />
    </div>

    <div className="text-[#F6C28B] font-normal pt-5 text-center">Don't be this person! Educate yourself!</div>

  </section>
)

export default Hero
