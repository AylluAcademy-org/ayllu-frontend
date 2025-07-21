//Endpoints to interact with the users table
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";

const apiRoute = "auth/login";
const apiRouteWallet="auth/loginWallet";
const API_URL = `${baseUrl}${apiRoute}`;
const API_URL_WALLET = `${baseUrl}${apiRouteWallet}`;


/**
 * Login a new user
 * It makes a POST request to the login API endpoint and returns the response data, which includes a token.
 * @param {user} user
 * @returns {object} - The user object
 * @example:
 * {    
    "email": "Davidquinta@gmail.com",
    "password": "quinta123"   
    }
 */
    export const loginUser = async (user) => {
      try {
        const response = await axios.post(API_URL, user);       
        return response.data;
      } catch (error) {       
        throw error; // Lanzar el error para que pueda ser capturado en el lugar donde se llama loginUser
      }
    };
    
    export const loginWallet = async (user) => {
      try {
        const response = await axios.post(API_URL_WALLET, user);       
        return response.data;
      } catch (error) {  
        console.log(error);     
        throw error; // Lanzar el error para que pueda ser capturado en el lugar donde se llama loginUser
      }
    };
    
    
    
    
    
    

