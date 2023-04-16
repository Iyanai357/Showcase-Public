import { useState } from 'react';
import alcoholChoices from '../data/alcoholChoices.json';

const AlcoholSelector = ({ setModalOn, onItemClick }) => {
  const [selectedChoice, setSelectedChoice] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
    setSelectedItem("");
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onItemClick(item);
    setModalOn(false);
  };

  const handleCancelClick = () => {
    setModalOn(false);
  };

  return (
    <div className="bg-black opacity-80 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white py-10 px-24 border-4 border-sky-500 rounded-xl">
          <div className="flex justify-center text-lg text-astronaut mb-10">
            Select Drink
          </div>
          <div className="flex flex-col justify-center items-center mb-5">
            {Object.keys(alcoholChoices).map((choice) => (
              <div key={choice} className="mt-2">
                <button
                  className={`rounded-full bg-astronaut opacity-90 py-2 px-3.5 font-com text-sm capitalize text-softAmber ${
                    selectedChoice === choice ? "ring-2 ring-offset-2 ring-sky-500" : ""
                  }`}
                  onClick={() => handleChoiceClick(choice)}
                >
                  {choice}
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            {selectedChoice !== "" && (
              <ul className="text-center">
                {alcoholChoices[selectedChoice].map((item) => (
                  <li
                    key={item}
                    onClick={() => handleItemClick(item)}
                    className={`py-2 px-3.5 cursor-pointer ${
                      selectedItem === item
                        ? "bg-sky-500 text-white"
                        : ""
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleCancelClick}
              className="items-center rounded px-4 p-2 mt-4 text-white bg-blue-500 mr-4"
            >
              Cancel
            </button>
            <button
              onClick={() => handleItemClick(selectedItem)}
              disabled={selectedChoice === "" || selectedItem === ""}
              className={`items-center rounded px-4 p-2 mt-4 text-white ${
                selectedChoice === "" || selectedItem === ""
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-sky-500"
              }`}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlcoholSelector;
