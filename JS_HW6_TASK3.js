// Задание 3
import users from "./users.js";
// Получить массив имен пользователей по полу (поле gender).
const getUsersWithGender = (users, gender) => users.filter(({gender})=> gender === 'male')

// const getUsersWithGender = (users, gender) => {
//     return users.filter((item) => {
//     return item.gender === gender})
//   // твой код
// };

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]