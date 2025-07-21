//Endpoints to interact with the test table
import axios from "axios";
const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/";

/**
 * Get test by moduleid
 * It makes a GET request to the API, and then returns the response data of a test.
 * @param {string} moduleId - The id of the module to get
 * @returns {object} - The test object
 */
export const getTestByModuleId = async (moduleId) => {
  axios
    .get(API_URL + "tests/getTestByModuleId", {
      params: {
        module_id: moduleId,
      },
    })
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
 * CreateTest
 * It makes a POST request to the API, and then returns the response data of a test.
 * @param {test} test - The test object to create
 * @returns {object} - The test object
 * @example:
 * {
    "description": "Test correspondiente al modulo uno del curso de Haskell",
    "moduleId": 1,
    "status": true
}
    */
export const createTest = async (test) => {
  axios
    .post(API_URL + "tests", test)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
