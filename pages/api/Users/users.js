//Endpoints to interact with the users table
import axios from "axios";

const API_URL = "https://cc2micpvg9.execute-api.us-east-1.amazonaws.com/dev/";

/**
 * Get All Users
 * It makes a GET request to the API, and then returns the response data of list of users.
 */
export const getAllUsers = async () => {
  axios.get(API_URL + "users").then((response) => {
    console.log(response.data);
    return response.data;
  });
};

/**
 * Create a new user
 * user object is passed as a parameter
 * {
    "name": "David Quintanilla",
    "email": "Davidquinta@gmail.com",
    "password": "quinta123",
    "wallet": "0x00000",
    "image": "imagen3",
    "totalRewards": 10
}
 */
export const createUser = async (user) => {
  axios.post(API_URL + "users", user).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

/**
 * Get a user by id
 * It makes a GET request to the API, and then returns the response data of a user.
 * @param {string} id - The id of the user to get
 * @returns {object} - The user object
 * @throws {Error} - If the user does not exist or if there is an error getting the user
 */
export const getUserById = async (id) => {
  axios
    .get(API_URL + "users/getUserById", {
      params: {
        user_id: id,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

/**
 * Update a user
 * It makes a POST request to the API, and then returns the response data of the updated user.
 * @param {user} user - The user object to update
 * @example:
 * {
    "user_id": 2,
    "name": "David Tacuri",
    "email": "DavidTacuri@gmail.com",
    "password": "DavidPassword",
    "wallet": "0x00000",
    "image": "imagen2",
    "totalRewards": 10,
    "createdAt": "2022-05-24T00:59:17.576Z"
}
 * @returns {object} - The user object
 */
export const updateUser = async (user) => {
  axios.post(API_URL + "users/update", user).then((response) => {
    console.log(response.data);
    return response.data;
  });
};
