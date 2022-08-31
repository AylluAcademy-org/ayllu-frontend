//Endpoints to interact with the resources table
import axios from "axios";
const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/";

/**
 * Get resource by lessonid
 * It makes a GET request to the API, and then returns the response data of a resource.
 * @param {string} lessonId - The id of the lesson to get
 * @returns {object} - The resource object
 */
export const getResourceByLessonId = async (lessonId) => {
  axios
    .get(API_URL + "resources/getResourceByLessonId", {
      params: {
        lesson_id: lessonId,
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
 * Create a new resource
 * it makes a POST request to the API, and then returns the response data of a resource.
 * @param {resource} resource - The resource object to create
 * @returns {object} - The resource object
 * @example:
 * {
    "name": "Introduccion a Haskell",
    "description": "Video introductorio a Haskell",
    "status": true,
    "url": "https://recursointroductoriohaskell",
    "lessonId": 2
}
 */

export const createResource = async (resource) => {
  axios
    .post(API_URL + "resources", resource)
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
 * Update a resource
 * it makes a PUT request to the API, and then returns the response data of a resource.
 * @param {resource} resource - The resource object to update
 * @returns {object} - The resource object
 * @example:
 * {
    "resource_id": 1,
    "name": "Introduccion a Haskell",
    "description": "Video introductorio a Haskell",
    "status": true,
    "url": "https://recursointroductoriohaskell",
    "lessonId": 2
}
    */
export const updateResource = async (resource) => {
  axios
    .put(API_URL + "resources", resource)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
