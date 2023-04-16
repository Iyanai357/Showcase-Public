import alcoholChoices from '../data/alcoholChoices.json'

const AlcoholModal = ({ setModalOn, choice, setChoice }) => {
  
    function handleCloseClick() {
        setModalOn(false);
    }
  
    return (
      <div className="bg-black opacity-80 fixed inset-0 z-50">
        <div className="flex h-screen justify-center items-center">
          <div className="flex-col justify-center bg-white py-10 px-24 border-4 border-sky-500 rounded-xl">
            <div className="flex justify-center text-lg  text-astronaut  mb-10">
              {choice} Types
            </div>
            {choice === "Beer" && (
              <>
                {alcoholChoices[choice].map(option => (
                    <li key={option}>
                     {option}
                    </li>
                ))}
              </>
            )}
             {choice === "Liquor" && (
              <>
                 {alcoholChoices[choice].map(option => (
                    <li key={option}>
                     {option}
                    </li>
                ))}
              </>
            )}
             {choice === "Wine" && (
              <>
                 {alcoholChoices[choice].map(option => (
                    <li key={option}>
                     {option}
                    </li>
                ))}
              </>
            )}
            <div className="flex justify-center">
              <button
                onClick={handleCloseClick}
                className="items-center rounded px-4 p-2 mt-4 text-white bg-blue-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AlcoholModal;
  