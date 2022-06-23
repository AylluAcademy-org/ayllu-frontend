//Endpoints to interact with the modules table
import axios from "axios";
const API_URL = "https://cc2micpvg9.execute-api.us-east-1.amazonaws.com/dev/";

/**
 * Get module by id
 * It makes a GET request to the API, and then returns the response data of a module.
 * @param {string} id - The id of the module to get
 * @returns {object} - The module object
 */
export const getModuleById = async (id) => {
  axios
    .get(API_URL + "modules/getModuleById", {
      params: {
        module_id: id,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

/**
 * Get module by courseid
 * It makes a GET request to the API, and then returns the response data of a module.
 * @param {string} courseId - The id of the course to get
 * @returns {object} - The module object
 */
export const getModuleByCourseId = async (courseId) => {
  axios
    .get(API_URL + "modules/getModuleByCourseId", {
      params: {
        course_id: courseId,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

/**
 * Create module
 * It makes a POST request to the API, and then returns the response data of a module.
 * @param {module} module - The module object to create
 * @returns {object} - The module object
 * @example:
 * {
    "name": "Hola",
    "description": "hola sol",
    "status": false,
    "image": "imagen4",
    "class": 8,
    "time": 18,
    "courseId": 2
}
    */
export const createModule = async (module) => {
  axios.post(API_URL + "modules", module).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

/**
 * Update module
 * It makes a PUT request to the API, and then returns the response data of a module.
 * @param {module} module - The module object to update
 * @returns {object} - The module object
 * @example:
 * {
    "name": "Hola",
    "description": "hola sol",
    "status": false,
    "image": "imagen4",
    "class": 8,
    "time": 18,
    "courseId": 2
} 
 */

export const updateModule = async (module) => {
  axios.put(API_URL + "modules", module).then((response) => {
    console.log(response.data);
    return response.data;
  });
};
