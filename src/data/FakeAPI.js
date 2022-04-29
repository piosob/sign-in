const data = {
  login: data => {
    const { username, password } = data;
    return new Promise((resolve, reject) => {
      if (username === "example" && password === "qwerty") {
        resolve({
          username,
          name: "John",
          surname: "Doe",
          lastLogin: new Date("29/04/2022 19:45:01")
        });
      } else {
        reject("Password or login is incorrect!");
      }
    });
  }
};

export default data;