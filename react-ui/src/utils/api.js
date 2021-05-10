import axios from "axios";

export const getPatientInfo = () => axios.get('/api/patients')
export const isBUValid = (buNumber) =>  axios.post('/api/patients/validateBu', { buNumber })
export const createPatientRequest = (patient) =>  axios.post('/api/patients', {
    name: "",
    age: 0,
    buNumber: "",
    phone: "",
    phoneAlt: "",
    ngoName: "",
    remarks: "",
    ...patient
})
