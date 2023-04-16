import { useState } from "react";
import AlcoholSelector from "./components/AlcoholSelector";
import styles from "./style";

const CalculatorPage = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [selectedItem1, setSelectedItem1] = useState(null);
  const [showModal2, setShowModal2] = useState(false);
  const [selectedItem2, setSelectedItem2] = useState(null);

  const handleItemClick1 = (item) => {
    setSelectedItem1(item);
    setShowModal1(false);
  };

  const handleItemClick2 = (item) => {
    setSelectedItem2(item);
    setShowModal2(false);
  };

  return (
    <>
      <section
        className={` w-full flex-col ${styles.flexCenter} bg-shipCove-gradient font-unbounded mt-10 pt- pb-5 rounded-3xl`}
      >
        <nav className="pt-5">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </nav>
      </section>

      <section
        className={`mt-20 pt-10 pb-5 rounded-3xl flex justify-center`}
      >
        <div>
          <h2 className="text-softAmber font-unbounded font-normal sm:text-4xl text-2xl text-center">
            Calculator
          </h2>
          <p className="text-[#F6C28B] font-bold pt-5 text-center ">
            Click on the open field to select a drink for calculation. Press Go
            to execute the calculation.
          </p>
        </div>
      </section>

      <section className={`mt-20 pt-10 pb-5 rounded-3xl flex justify-center flex-wrap md:flex-nowrap`}>
        <button
          className="rounded-full bg-shipCoveOpac opacity-[100%] mt-5 py-2 px-3.5 font-com text-base md:text-lg capitalize text-softAmber"
          onClick={() => setShowModal1(true)}
        >
          {selectedItem1 ? selectedItem1 : "Click to add"}
        </button>
        <p className="mt-5 py-2 px-3.5 text-3xl md:text-5xl">+</p>
        <button
          className="rounded-full bg-shipCoveOpac opacity-[90%] mt-5 py-2 px-3.5 font-com text-base md:text-lg capitalize text-softAmber"
          onClick={() => setShowModal2(true)}
        >
          {selectedItem2 ? selectedItem2 : "Click to add"}
        </button>
        <p className="mt-5 py-2 px-3.5 text-3xl md:text-5xl">=</p>
        <button className=" glow rounded-full bg-brightTurquoise opacity-[90%] mt-5 py-2 px-3.5 font-com text-base md:text-lg capitalize text-white">
          GO!
        </button>
      </section>

      {showModal1 && (
        <AlcoholSelector
          setModalOn={setShowModal1}
          onItemClick={handleItemClick1}
        />
      )}

      {showModal2 && (
        <AlcoholSelector
          setModalOn={setShowModal2}
          onItemClick={handleItemClick2}
        />
      )}
    </>
  );
};

export default CalculatorPage;
