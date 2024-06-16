export const randomUsers = () => {
  const names = [
    "John",
    "Emma",
    "Oliver",
    "Sophia",
    "Michael",
    "Emily",
    "Daniel",
    "Anna",
    "David",
    "Isabella",
  ]; // Add more names as needed
  const users = [];
  for (let i = 0; i < 50; i++) {
    users.push({
      name: names[Math.floor(Math.random() * names.length)], // This will select a random name from the names array
      amount: parseFloat((Math.random() * 1000).toFixed(2)), // This will generate a random float number between 0 and 1000
      color: "#" + Math.floor(Math.random() * 16777215).toString(16), // This will generate a random hex color
      isFinished: false,
      finishedCoff: parseFloat((Math.random() * 150 + 1).toFixed(2)),
    });
  }
  return users;
};
