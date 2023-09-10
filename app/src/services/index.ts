import Service from "./service"

const service = new Service()

export const login =  (body:any) => service.post("app1/auth/login", body)
export const getUserDetails = () => service.get("app2/user/me")