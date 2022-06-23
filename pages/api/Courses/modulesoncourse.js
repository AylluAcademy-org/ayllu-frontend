//Endpoints to interact with the ModulesOnCourse table
import axios from "axios";
API_URL = "https://cc2micpvg9.execute-api.us-east-1.amazonaws.com/dev/";

/**
 * Get all modules on course
 * It makes a GET request to the API, and then returns the response data of all modules on course.
 * @returns {object} - The modules on course object
 */
export const getModulesOnCourse = async () => {
  axios
    .get(API_URL + "modulesOnCourse")
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
 * Create a new module on course
 * it makes a POST request to the API, and then returns the response data of a module on course.
 * @param {moduleOnCourse} moduleOnCourse - The module on course object to create
 * @returns {object} - The module on course object
 * @example:
 * {
    "module_id": 1,
    "userOnCourse_id": 6,
    "lessonsCompleted": 0,
    "progress": 0,
    "isEnded": false,
    "grade": 0,
    "moduleRating": 0,
    "userReview": ""
}
*/
export const createModuleOnCourse = async (moduleOnCourse) => {
  axios
    .post(API_URL + "modulesOnCourse", moduleOnCourse)
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
 * Get module on course by userId
 * It makes a GET request to the API, and then returns the response data of a module on course.
 * @param {string} userId - The id of the user to get
 * @returns {object} - The module on course object
 */
export const getModuleOnCourseByUserId = async (userId) => {
  axios
    .get(API_URL + "modulesOnCourse/getModuleOnCourseByUserId", {
      params: {
        userId: userId,
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
 * Get modules completed
 * It makes a GET request to the API, and then returns the response data of a module on course.
 * @param {string} userId - The id of the user to get
 * @returns {object} - The module on course object
 */
export const getModulesCompleted = async (userId) => {
  axios
    .get(API_URL + "modulesOnCourse/getModulesCompleted", {
      params: {
        userId: userId,
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
 * Update module on course
 * it makes a PUT request to the API, and then returns the response data of a module on course.
 * @param {moduleOnCourse} moduleOnCourse - The module on course object to update
 * @returns {object} - The module on course object
 * {
    "module_id": 1,
    "userOnCourse_id": 3,
    "lessonsCompleted": 8,
    "progress": 0,
    "isEnded": true,
    "grade": 7,
    "moduleRating": 2,
    "userReview": "Buen modulo"
}
*/
export const updateModuleOnCourse = async (moduleOnCourse) => {
  axios
    .put(API_URL + "modulesOnCourse", moduleOnCourse)
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
 * Get modules average grade
 * It makes a GET request to the API, and then returns the response data of a module on course.
 * @param {string} userOnCourse_id - The id of the user to get
 * @returns {object} - The module on course object
 */
export const getModulesAverageGrade = async (userOnCourse_id) => {
  axios
    .get(API_URL + "modulesOnCourse/getModulesAverageGrade", {
      params: {
        userOnCourse_id: userOnCourse_id,
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
