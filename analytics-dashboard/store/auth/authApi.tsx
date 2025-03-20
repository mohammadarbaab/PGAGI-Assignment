// A mock function to mimic making an async request for data
export function createUser(userData) {
    return new Promise(async (resolve, reject) => {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "content-type": "application/json" },
      });
  
      if (!response.ok) {
        reject({ message: "Failed to create user" });
        return;
      }
  
      const data = await response.json();
      resolve({ data });
    });
  }
  
  // A mock function to mimic checking user credentials
  export function checkUser(loginInfo) {
    return new Promise(async (resolve, reject) => {
      const email = loginInfo.email;
      const password = loginInfo.password;
  
      const response = await fetch(`http://localhost:8080/users?email=${email}`);
      const data = await response.json();
  
      if (data.length) {
        if (password === data[0].password) {
          resolve({ data: data[0] });
        } else {
          reject({ message: "Wrong credentials" });
        }
      } else {
        reject({ message: "User not found" });
      }
    });
  }
  
  // A mock function to sign out the user
  export function signOut() {
    return new Promise((resolve) => {
      resolve({ data: "success" });
    });
  }
  