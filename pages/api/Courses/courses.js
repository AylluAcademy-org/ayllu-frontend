//Endpoints to interact with the courses table
import axios from "axios";
API_URL = "https://cc2micpvg9.execute-api.us-east-1.amazonaws.com/dev/";
/**
 * Get All Courses
 * It makes a GET request to the API, and then returns the response data of list of courses.
 * @returns {object} - The list of courses
 * @throws {Error} - If there is an error getting the courses
 */

export const getAllCourses = async () => {
  axios.get(API_URL + "courses").then((response) => {
    console.log(response.data);
    return response.data;
  });
};

/**
 * Create a new course
 * course object is passed as a parameter
 * @param {object} course - The course object to create
 * @example:
 * {
    "name": "Rust",
    "description": "Curso de Rust para Blockchain",
    "price": 90,
    "duration": 15,
    "image": "https://imagencursorust.com",
    "video": "https://videosrust.com",
    "lesson": 15,
    "likes": 10,
    "categoryId": 3,
    "authorId": 1,
    "status": true    
}
 */

export const createCourse = async (course) => {
  axios.post(API_URL + "courses", course).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

/**
 * Get a course by id
 * It makes a GET request to the API, and then returns the response data of a course.
 * @param {string} id - The id of the course to get
 * @returns {object} - The course object
 */
export const getCourseById = async (id) => {
  axios
    .get(API_URL + "courses/getCourseById", {
      params: {
        course_id: id,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

/**
 * Get a course by category
 * It makes a GET request to the API, and then returns the response data of a course.
 * @param {string} categoryId - The id of the category to get
 * @returns {object} - The course object
 */
export const getCourseByCategory = async (categoryId) => {
  axios
    .get(API_URL + "courses/getCourseByCategory", {
      params: {
        category_id: categoryId,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

/**
 * Get a course by name
 * It makes a GET request to the API, and then returns the response data of a course.
 * @param {string} name - The name of the course to get
 * @returns {object} - The course object
 */
export const getCourseByName = async (name) => {
  axios
    .get(API_URL + "courses/getCourseByName", {
      params: {
        name: name,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};
