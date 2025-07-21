//Endpoints to interact with the test anwsers table
import axios from "axios";
const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/";

/**
 *Get user test answers by testid
 *It makes a GET request to the API, and then returns the response data of user test answers.
 *@param {string} test_id - The id of the test to get
 *@param {string} userOnCourse_id - The id of the user to get
 *@returns {object} - The user test answers object
 */
export const getUserTestAnswers11 = async (test_id, userOnCourse_id) => {
  axios
    .get(
      API_URL +
        "testAnswers?test_id=" +
        test_id +
        "&userOnCourse_id=" +
        userOnCourse_id
    )
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
 * Create a new user test answers
 * it makes a POST request to the API, and then returns the response data of a user test answers.
 * @param {userTestAnswers} userTestAnswers - The user test answers object to create
 * @returns {object} - The user test answers object
 * @example:
 * [
    {
        "userOnCourse_id": 1,
        "test_id": 2,
        "question_id": 1,
        "optionSelected": 1,
        "value": false
    },
    {
        "userOnCourse_id": 1,
        "test_id": 2,
        "question_id": 2,
        "optionSelected": 2,
        "value": false
    }
]
    */
export const createUserTestAnswers11 = async (userTestAnswers) => {
  axios
    .post(API_URL + "testAnswers", userTestAnswers)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

