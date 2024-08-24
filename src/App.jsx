import "./App.css";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <h1 className="text-5xl font-bold text-red-500 text-center py-5">
        Modal Create
      </h1>
      {/* Modal button */}
      <div onClick={() => setShowModal(true)} className="text-center mb-3">
        <button className="bg-slate-600 hover:bg-slate-700 text-white font-bold text-2xl rounded-xl py-5 px-10">
          Open Modal
        </button>
      </div>
      {/* modal container */}
      {showModal ? (
        <div className="bg-black/70 fixed inset-x-0 inset-y-0">
          <div className="w-1/3 rounded-md bg-slate-500 text-white px-5 py-3 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <h1 className="text-2xl py-2 border-b mb-5">Hallo world!</h1>
            <p className="text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              sint quas. Officia, nostrum? Soluta, architecto dignissimos.
            </p>
            {/* close button */}
            <div className="text-right">
              <button onClick={() => setShowModal(false)} className="bg-white py-2 rounded-lg text-xl font-semibold text-red-500 px-5 mt-5">
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
