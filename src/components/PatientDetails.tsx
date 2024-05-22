import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { Patient } from "../types"
import DetailItem from "./DetailItem"

type PatientDetailProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailProps) {
    const deletePatient = usePatientStore((state) => state.deletePatient)
    const getPatientById = usePatientStore((state) => state.getPatientById)

    const handleDelete = () => {
        deletePatient(patient.id)
        toast.error('Patient Deleted')
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <DetailItem label="ID" data={patient.id} />
            <DetailItem label="Name" data={patient.name} />
            <DetailItem label="Caretaker" data={patient.caretaker} />
            <DetailItem label="Email" data={patient.email} />
            <DetailItem label="Admision Date" data={patient.date.toString()} />
            <DetailItem label="Symptoms" data={patient.symptoms} />

            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => getPatientById(patient.id)}
                >Edit
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => handleDelete()}
                >Delet
                </button>
            </div>
        </div>
    )
}