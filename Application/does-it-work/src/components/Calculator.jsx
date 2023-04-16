import { useNavigate } from 'react-router-dom'
import styles from '../style'
import GetStarted from './GetStarted'

const Calculator = () => { 
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Calculator")
  }

  return (
    <section id="calculator" className={`w-full flex-col ${styles.flexCenter} font-unbounded mt-10 bg-shipCoveOpac pt-5 pb-5 rounded-2xl`} >
      <div className='text-softAmber text-[40px] mb-5 text-2xl sm:text-4xl font-semibold text-center hover:font-medium hover:text-astronaut'>Experiment yourself</div>
      <p className='text-[#F6C28B] text-center text-base'>This "stupid level" calculator helps show the effects of mixing two types of alcoholic beverages together.</p>

      <div className="md:flex md:justify-end mt-10">
        <button onClick={handleClick} className="btn btn-primary">
          <GetStarted/>
        </button>
      </div>

    </section>
  )
}

export default Calculator
