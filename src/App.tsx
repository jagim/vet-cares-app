import Form from "./components/Form"
import PatientList from "./components/PatientList"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex gap-3 items-center justify-center border-b-4 border-blue-800 mx-5 pb-5">
          <img src="pet-fingerprint.png" alt="fingerprint image" className="w-24" />
          <h1 className="font-black text-5xl text-center"
          >Veterinary <span className="text-indigo-700">Cares</span>
          </h1>
        </div>
        <div className="mt-12 md:flex">
          <Form />
          <PatientList />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
