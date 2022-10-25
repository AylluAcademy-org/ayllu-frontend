import { AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js'

const userPoolId = process.env.REACT_APP_USERPOOL_ID
const clientId = process.env.REACT_APP_CLIENT_ID

console.log(`userpool id=${userPoolId}`)
console.log(`client id=${clientId}`)

const poolData = {
  UserPoolId: `${userPoolId}`,
  ClientId: `${clientId}`,
}

const userPool = new CognitoUserPool(poolData)

let currentUser = userPool.getCurrentUser()

export function getCurrentUser() {
  return currentUser
}

function getCognitoUser(username) {
  const userData = {
    Username: username,
    Pool: userPool,
  }
  const cognitoUser = new CognitoUser(userData)

  return cognitoUser
}

export async function getSession() {
  if (!currentUser) {
    currentUser = userPool.getCurrentUser()
  }

  return new Promise(function (resolve, reject) {
    currentUser.getSession(function (err, session) {
      if (err) {
        reject(err)
      } else {
        resolve(session)
      }
    })
  }).catch((err) => {
    throw err
  })
}

export async function signUpUserWithEmail(username, email, password) {
  return new Promise(function (resolve, reject) {
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email,
      }),
    ]

    userPool.signUp(username, password, attributeList, [], function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  }).catch((err) => {
    throw err
  })
}

export async function verifyCode(username, code) {
  return new Promise(function (resolve, reject) {
    const cognitoUser = getCognitoUser(username)

    cognitoUser.confirmRegistration(code, true, function (err, result) {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  }).catch((err) => {
    throw err
  })
}

export async function signInWithEmail(username, password) {
  return new Promise(function (resolve, reject) {
    const authenticationData = {
      Username: username,
      Password: password,
    }
    const authenticationDetails = new AuthenticationDetails(authenticationData)

    currentUser = getCognitoUser(username)

    currentUser.authenticateUser(authenticationDetails, {
      onSuccess: function (res) {
        resolve(res)
      },
      onFailure: function (err) {
        reject(err)
      },
    })
  }).catch((err) => {
    throw err
  })
}

export function signOut() {
  if (currentUser) {
    currentUser.signOut()
  }
}

export async function getAttributes() {
  return new Promise(function (resolve, reject) {
    currentUser.getUserAttributes(function (err, attributes) {
      if (err) {
        reject(err)
      } else {
        resolve(attributes)
      }
    })
  }).catch((err) => {
    throw err
  })
}

export async function setAttribute(attribute) {
  return new Promise(function (resolve, reject) {
    const attributeList = []
    const res = new CognitoUserAttribute(attribute)
    attributeList.push(res)

    currentUser.updateAttributes(attributeList, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  }).catch((err) => {
    throw err
  })
}

export async function sendCode(username) {
  return new Promise(function (resolve, reject) {
    const cognitoUser = getCognitoUser(username)

    if (!cognitoUser) {
      reject(`could not find ${username}`)
      return
    }

    cognitoUser.forgotPassword({
      onSuccess: function (res) {
        resolve(res)
      },
      onFailure: function (err) {
        reject(err)
      },
    })
  }).catch((err) => {
    throw err
  })
}

export async function forgotPassword(username, code, password) {
  return new Promise(function (resolve, reject) {
    const cognitoUser = getCognitoUser(username)

    if (!cognitoUser) {
      reject(`could not find ${username}`)
      return
    }

    cognitoUser.confirmPassword(code, password, {
      onSuccess: function () {
        resolve('password updated')
      },
      onFailure: function (err) {
        reject(err)
      },
    })
  })
}

export async function changePassword(oldPassword, newPassword) {
  return new Promise(function (resolve, reject) {
    currentUser.changePassword(oldPassword, newPassword, function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}
