//Endpoints to interact with the options table
import axios from "axios";
const API_URL = "https://cc2micpvg9.execute-api.us-east-1.amazonaws.com/dev/";

/**
 * Get option by question id
 * It makes a GET request to the API, and then returns the response data of options.
 * @param {string} question_id - The id of the question to get
 * @returns {object} - The options object
 */
export const getOptions = async (question_id) => {
  axios
    .get(API_URL + "options?question_id=" + question_id)
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
     * Create a new option
     * it makes a POST request to the API, and then returns the response data of an option.
     * @param {option} option - The option object to create
     * @returns {object} - The option object
     * @example:
     * {
    "text": "option 2",
    "order": 2,
    "status": true,
    "value": true,
    "questionId": 1
}
        */
export const createOption = async (option) => {
  axios
    .post(API_URL + "options", option)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
