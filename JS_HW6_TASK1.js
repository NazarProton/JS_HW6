import users from "./users.js";


let getUserNames = (users) => users.map(({ name })=> name);
console.log(getUserNames(users));