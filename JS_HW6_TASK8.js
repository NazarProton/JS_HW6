// console.log(calculateTotalBalance(users)); // 20916
// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.
import users from "./users.js";
const getUsersWithFriend = (users, friendName) => users.filter(({friends})=> friends.includes(friendName)).map(({name}) => name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]