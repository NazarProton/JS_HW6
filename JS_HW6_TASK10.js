// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
import users from "./users.js";
const getSortedUniqueSkills = (users) => 
users
    .reduce((acc , {skills}) => [...acc, ...skills], [])
    .filter((element , index , array) => array.indexOf(element) === index)
    .sort()
const getSortedUniqueEyeColor = (users) => 
users
    .reduce((acc , {eyeColor}) =>[...acc, eyeColor], [])
    .filter((element , index , array) => array.indexOf(element) === index)
    .sort()
console.log(getSortedUniqueSkills(users));
console.log(getSortedUniqueEyeColor(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
