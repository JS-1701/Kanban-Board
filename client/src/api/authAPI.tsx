import { UserLogin } from "../interfaces/UserLogin";

 // TODO: make a POST request to the login route
const login = async (userInfo: UserLogin) => {
 try {
  const response = await fetch('/auth/login', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error from user login: ', error);
    return Promise.reject('could not fetch info');
  }
}


export { login };
