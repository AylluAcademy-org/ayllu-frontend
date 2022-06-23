//Endpoints to interact with the lessons table
import axios from "axios";
API_URL = "https://cc2micpvg9.execute-api.us-east-1.amazonaws.com/dev/";

/**
 * Get lesson by id
 * It makes a GET request to the API, and then returns the response data of a lesson.
 * @param {string} id - The id of the lesson to get
 * @returns {object} - The lesson object
 */
export const getLessonById = async (id) => {
  axios
    .get(API_URL + "lessons/getLessonById", {
      params: {
        lesson_id: id,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

/**
 * Create a new lesson
 * it makes a POST request to the API, and then returns the response data of a lesson.
 * @param {lesson} lesson - The lesson object to create
 * @returns {object} - The lesson object
 * @example:
 * {
    "name": "Tipado de datos en Solidity",
    "status": true,
    "image": "imagen2",
    "video": "video2",
    "moduleId": 2
}
    */
export const createLesson = async (lesson) => {
  axios
    .post(API_URL + "lessons", lesson)
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
 * Get lesson by moduleid
 * It makes a GET request to the API, and then returns the response data of a lesson.
 * @param {string} moduleId - The id of the module to get
 * @returns {object} - The lesson object
 */
export const getLessonByModuleId = async (moduleId) => {
  axios
    .get(API_URL + "lessons/getLessonByModuleId", {
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
