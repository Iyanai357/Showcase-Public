import styles from '../style'
import { beerType, wineType, liqueurType } from '../assets'
import { useState } from 'react'
import AlcoholModal from './AlcoholModal';


const Alcohol = () => {

const [modalOn, setModalOn] = useState(false);
const [choice, setChoice] = useState(false);


const clicked = (item) => {
  setChoice(item);
  setModalOn(true)
}

  return (

    <section id="alcohol" className={`bg-transparent w-full flex-col ${styles.flexCenter} font-unbounded mt-10`} >
        
        <div className='text-softAmber sm:text-4xl text-2xl mt-10 font-semibold'>Alcohol Types</div>

            <div className="flex items-center justify-center p-11 bg-hidden">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 ">

                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl animate-pulse hover:animate-none">
                  <div className="h-96 w-72">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={ beerType } alt="Beer Image" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-astronaut group-hover:from-softAmber/70 group-hover:via-astronaut/60 group-hover:to-softAmber/70"></div>

                  <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-unbounded text-3xl font-bold text-softAmber">Beer</h1>
                    <p className="mb-3 text-lg italic text-softAmber opacity-0 transition-opacity duration-300 group-hover:opacity-100">noun</p>
                      <ol className="list-disc text-start text-softAmber">
                        <li>
                           A magic potion used to make the opposite sex look better
                          
                        </li>
                      </ol>
                    <button className="rounded-full bg-astronaut opacity-[90%] mt-5 py-2 px-3.5 font-com text-sm capitalize text-softAmber shadow shadow-black/60 hover:shadow-white" onClick={() => clicked('Beer')}>See More</button>
                  </div>

                  {modalOn && < AlcoholModal setModalOn={setModalOn} choice={choice} />}

                </div>

              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl animate-pulse hover:animate-none">
                  <div className="h-96 w-72">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={ liqueurType } alt="Liqueur Image" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-astronaut group-hover:from-softAmber/70 group-hover:via-astronaut/60 group-hover:to-softAmber/70"></div>

                  <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-unbounded text-3xl font-bold text-softAmber">Liquor</h1>
                    <p className="mb-3 text-lg italic text-softAmber opacity-0 transition-opacity duration-300 group-hover:opacity-100">poison</p>
                    <ol className="list-disc text-start text-softAmber">
                        <li>
                            Drinking may cause memory loss. Or worse. Memory loss!
                        </li>
                      </ol>
                    <button className="rounded-full bg-astronaut opacity-[90%] mt-5 py-2 px-3.5 font-com text-sm capitalize text-softAmber shadow shadow-black/60 hover:shadow-white" onClick={() => clicked('Liquor')}>See More</button>
                  </div>

                  {modalOn && < AlcoholModal setModalOn={setModalOn} choice={choice} />}
 

                </div>

                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl animate-pulse hover:animate-none">
                  <div className="h-96 w-72">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={ wineType } alt="Wine Image" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-astronaut group-hover:from-softAmber/70 group-hover:via-astronaut/60 group-hover:to-softAmber/70"></div>

                  <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-unbounded text-3xl font-bold text-softAmber">Wine</h1>
                    <p className="mb-3 text-lg italic text-softAmber opacity-0 transition-opacity duration-300 group-hover:opacity-100">noun</p>
                    <ol className="list-disc text-start text-softAmber">
                        <li>
                            When you are too broke, hungover or not in the mood for beer
                        </li>
                      </ol>
                    <button className="rounded-full bg-astronaut opacity-[90%] mt-5 py-2 px-3.5 font-com text-sm capitalize text-softAmber shadow shadow-black/60 hover:shadow-white" onClick={() => clicked('Wine')}>See More</button>
                  </div>

                  {modalOn && < AlcoholModal setModalOn={setModalOn} choice={choice} />}

                </div>

              </div>

            </div>

    </section>
  )

  };

export default Alcohol