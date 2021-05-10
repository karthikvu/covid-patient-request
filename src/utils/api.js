import axios from "axios";

export const getPatientInfo = () => axios.get('https://5a9fbedd29d04a00142ff821.mockapi.io/test/patients')