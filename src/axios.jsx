

import axios from "axios";



export const registerAxios = (params)=> axios.post("http://localhost:3000/users", {name:params.name,email:params.email, password:params.password}).then((p)=>p.data).catch((p)=>p)

export const loginAxios = (params)=> axios.get("http://localhost:3000/users?email="+params.email).catch((p)=>p)