//Endpoints to interact with the questions table
import axios from "axios";
API_URL = "https://cc2micpvg9.execute-api.us-east-1.amazonaws.com/dev/";

/**
 * Get questions by testid
 * It makes a GET request to the API, and then returns the response data of questions.
 * @param {string} testId - The id of the test to get
 * @returns {object} - The questions object
 */
export const getQuestionsByTestId = async (testId) => {
  axios
    .get(API_URL + "questions/getQuestionsByTest", {
      params: {
        test_id: testId,
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
 * Create a new question
 * it makes a POST request to the API, and then returns the response data of a question.
 * @param {question} question - The question object to create
 * @returns {object} - The question object
 * @example:
 * {
    "text": "En que año y por quienes fue creado Haskell?",
    "order": 1,
    "status": true,
    "testId": 2
}
    */

export const createQuestion = async (question) => {
  axios
    .post(API_URL + "questions", question)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
