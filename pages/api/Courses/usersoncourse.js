/**
 * SET OF ENDPOINTS THAT ALLOW TO INTERACT WITH THE USERONCOURSES TABLE IN THE DATABASE,
 * A TABLE THAT KEEPS THE RECORD OF THE STUDENTS WHO HAVE ENROLLED IN THE ACADEMY'S COURSES.
 */
import axios from "axios";
const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/";

/**
 * Get all users on course
 * It makes a GET request to the API, and then returns the response data of all users on course.
 * @returns {object} - The users on course object
 */
export const getUsersOnCourse = async () => {
  axios
    .get(API_URL + "usersOnCourses")
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
 * Create a new user on course
 * it makes a POST request to the API, and then returns the response data of a user on course.
 * @param {userOnCourse} userOnCourse - The user on course object to create
 * @returns {object} - The user on course object
 * @example:
 * {
    "userId": 2,
    "courseId": 3,
    "progress": 0,
    "ended": false,
    "grade": 9,
    "rating": 5,
    "review": "Estuvo bueno",
    "reward": 15
}
 */

export const createUserOnCourse = async (userOnCourse) => {
  axios
    .post(API_URL + "usersOnCourses", userOnCourse)
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
 * Update a user on course
 * it makes a PUT request to the API, and then returns the response data of a user on course.
 * @param {userOnCourse} userOnCourse - The user on course object to update
 * @returns {object} - The user on course object
 * @example:
 * {
     "useroncourse_Id": 2,
    "userId": 3,
    "courseId": 1,
    "progress": 100,
    "ended": true,
    "grade": 9,
    "rating": 5,
    "review": "Finalizado",
    "reward": 15
}
    */
export const updateUserOnCourse = async (userOnCourse) => {
  axios
    .put(API_URL + "usersOnCourses", userOnCourse)
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
 * Get courses completed
 * It makes a GET request to the API, and then returns the response data of courses completed.
 * @returns {object} - The courses completed object
 */
export const getCoursesCompleted = async () => {
  axios
    .get(API_URL + "coursesCompleted")
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
 * get courses active
 * It makes a GET request to the API, and then returns the response data of courses active.
 * @returns {object} - The courses active object
 */
export const getCoursesActive = async () => {
  axios
    .get(API_URL + "coursesActive")
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
 * Get active courses by user_id
 * It makes a GET request to the API, and then returns the response data of active courses by user_id.
 * @returns {object} - The active courses by user_id object
 * @param {number} user_id - The user_id to get active courses
 */
export const getActiveCoursesByUserId = async (user_id) => {
  axios
    .get(API_URL + "coursesActive/" + user_id)
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
 * Get completed courses by user_id
 * It makes a GET request to the API, and then returns the response data of completed courses by user_id.
 * @returns {object} - The completed courses by user_id object
 * @param {number} user_id - The user_id to get completed courses
 */
export const getCompletedCoursesByUserId = async (user_id) => {
  axios
    .get(API_URL + "coursesCompleted/" + user_id)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
