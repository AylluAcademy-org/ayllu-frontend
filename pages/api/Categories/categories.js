//Endpoints to interact with the categories table
import axios from "axios";
const API_URL = "https://cc2micpvg9.execute-api.us-east-1.amazonaws.com/dev/";

/**
 * Get all categories
 * It makes a GET request to the API, and then returns the response data of all categories.
 * @returns {object} - The categories object
 */
export const getCategories = async () => {
  axios
    .get(API_URL + "categories")
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

/**
 * Create a new category
 * it makes a POST request to the API, and then returns the response data of a category.
 * @param {category} category - The category object to create
 * @returns {object} - The category object
 * @example:
 * {
    "name": "Cardano",
    "status": true,
    "image": "Image3"
}
*/

export const createCategory = async (category) => {
  axios
    .post(API_URL + "categories", category)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
