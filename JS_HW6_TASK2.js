// Задание 2
// Получить массив объектов пользователей по
  
import users from "./users.js";

const getUsersWithEyeColor = (users, color) =>
  users.filter(({ eyeColor}) => eyeColor === color);

// const getInfoAboutUsers = (users, isActive) => {
//   return users.filter((item) => {
//     return item.isActive === isActive;
//   })
// }
  console.table(getUsersWithEyeColor(users, true));




