const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

// Shallow copy of the players array
const team = [...players]; // This creates a new array with the same elements

// Deep copy of the person object
const cap1 = { ...person }; // This creates a new object with the same properties and values

// Modifying the copied objects
team.push("Ram"); // Modifying team should not affect players
cap1.name = "Jane";     // Modifying cap1 should not affect person


window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
