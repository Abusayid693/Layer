import axios from "axios"
import Service from "./service"
const service = new Service()

export const login =  (body:any) => service.post("app1/auth/login", body)
export const getUserDetails = () => service.get("app2/user/me")
export const getSignedS3Token = (body:any)=> service.post("app1/auth/get-signed-url", body)

export const uploadToS3 = async (signedRequest:any, fileDetail:any, fileType:any) => {
    const options = {
      headers: {
        "Content-Type": fileType,
      },
    };
    console.log("Uploading....");
    const returned = await axios.put(signedRequest, fileDetail, options);
    return returned;
  };
  