let firstName = "Nitiya";
let animalType = "dog";
let animalName = "Jacko";

function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
}

sayHello("Nitiya");

function presentPet(firstName, animalType, animalName) {
  console.log(
    `My name is ${firstName}, I have a ${animalType} and his name is ${animalName}`
  );
}

presentPet(firstName, animalType, animalName);
