/*
  Array methods:
  forEach()
  every()
  some()
  find()
  filter()
  map()
  reduce()
*/

let courses = [
  {
    id: 1,
    name: 'Javascript',
    coin: 250,
  },
  {
    id: 2,
    name: 'HTML,CSS',
    coin: 0,
  },
  {
    id: 3,
    name: 'PHP',
    coin: 250,
  },
  {
    id: 4,
    name: 'Python',
    coin: 0,
  },
  {
    id: 5,
    name: 'Ruby',
    coin: 250,
  },
  {
    id: 6,
    name: 'Ruby',
    coin: 250,
  },
];
function courseHandler(course) {
  return `h2>${course.name}</h2>`;
}

let newCourses = courses.map(courseHandler);

console.log(newCourses.join(''));
