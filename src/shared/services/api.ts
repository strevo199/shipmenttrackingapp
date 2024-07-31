import axios from "axios";
import { statusCodes } from "./statusCodes";
import { BASE_URL_HITCHPAY } from "./config";

axios.defaults.timeout = 60000;
export const apiInstance = axios.create({
  baseURL: BASE_URL_HITCHPAY,
});
const endpoint = (url: string) =>{
const urlLength =  url.split("/").length -2;
return   url.split("/")[urlLength]
  };

apiInstance.interceptors.response.use(
  async result => {
    console.log(endpoint(String(result.config.url)).toUpperCase(),"RESULT DATA=====>",JSON.stringify(result.data));
    return result.data;
  },
  async result => {
    
    if (result.response) {

      const error = result.response;
      const { status, data: errorData }: any = error;

      console.log(endpoint(result.config.url).toUpperCase(),"ERROR DATA=====>",JSON.stringify(error));

      if (status === undefined) {
        const serverError =
          "An error occur, Please try again";
        throw { status: false, message: serverError, data: null } as any;
      }

      if (status >= statusCodes.SERVER_ERROR_HTTP_CODE) {
        const serverError =
          "Currently unable to connect to server, Please try again";
        throw { status: false, message: serverError, data: null } as any;
      }
     

      if (status >= 400 || status <= 499) {
        switch (status) {
          case statusCodes.UNAUTHORIZED_HTTP_CODE: {
            store.dispatch(loginError());

            throw errorData;
          }

          case statusCodes.BAD_REQUEST_HTTP_CODE: {
            throw errorData;
            throw {
              status: false,
              message:
                "Currently unable to connect to server, Please try again",
              data: null,
            } as any;
          }

          case 417: {
            throw errorData;
          }

          default: {
            throw {
              status: false,
              message:
                "Couldn't perform your request. Please make sure your phone has an Internet connection and try again",
              data: null,
            } as any;
          }
        }
      }
      const unhandledError =
        "Currently unable to process your request. Please try again";

      throw { status: false, message: unhandledError, data: null } as any;
    }
    throw {
      status: false,
      message:
        "Couldn't perform your request. Please make sure your phone has an Internet connection and try again",
      data: null,
    } as any;
  },
);

apiInstance.interceptors.request.use(
  async request => {
const token = 'fhd'
    if (token) {
      request.headers.set("Authorization", `JWT ${token}`);
    }

    request.headers.set("content-type", `application/json`);

    const originalBody = request.data;

    console.log( endpoint(String(request.url)).toUpperCase(),"ORIGINAL BODY=====>",
      JSON.stringify(originalBody)
    );

    return request;
  },
  error => Promise.reject(error),
);
