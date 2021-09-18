/*
Game of Thrones : Houses And People's Name
Try to first understand how Array in Objects & Objects in Array are arranged in this example.
Only when you don't get it by yourself, comeback again and read the hint
*/

// Write code for the following problems:
console.log(got);

// You have access to a variable named `got`. Which comes from `data.js` file

/*
Hint: (Structure of got variable)
  - got variable is an Object which has one key: `houses`
  - `houses` is an array of multiple house
  - Each house is an Object which has two keys: "name" and "people"
  - people is an array of all persons living in that particular house
  - And, each person is an object with "name" and "description" properties
*/

// 1. Log the value of key "houses"
console.log(got.houses);


// 2. Log the length of the "houses" key
console.log(got.houses.length);


// 3. Log the name of all houses in got one by one
 for (let house of got.houses) {
   alert(house.name);
  }

  
// 4. Log the name of all the people in house Starks (index 0) one by one
for ( let allName of got.houses) {
	if (allName.name == "Starks") {
  	for (let thing of allName.people) {
    console.log(thing.name);
    }
  } 
};


// 5. Log the name of all the people in house Lannisters (index 1) one by one
for ( let allName of got.houses) {
	if (allName.name == "Lannisters") {
  	for (let thing of allName.people) {
    console.log(thing.name);
    }
  } 
};


// 6. Log the description of all the people in house Lannisters (index 1) one by one

for ( let allName of got.houses) {
	if (allName.name == "Lannisters") {
  	for (let thing of allName.people) {
    console.log(thing.description);
    }
  } 
};


// 7. Log the name and description of all the people in house Lannisters (index 1) one by one like `I am [name] and my bio is [description]`

for ( let allName of got.houses) {
	if (allName.name == "Lannisters") {
  	for (let thing of allName.people) {
    console.log(thing.description && thing.description);
    }
  } 
};


// 8. Log the name and description of all the people in house Starks (index 0) one by one like `I am [name] and my bio is [description]`
for ( let allName of got.houses) {
	if (allName.name == "Lannisters") {
  	for (let thing of allName.people) {
      console.log(`I am ${[thing.name]} and my bio is
      ${[thing.description]}`)    
    }
  } 
};


// 9. Log the name and description of the people in house Starks whose name is `Robb Stark`

for ( let allName of got.houses) {
	if (allName.name == "Starks") {
  	for (let thing of allName.people) {
    if ( thing.name == "Robb Stark") {
     console.log(thing.name);
     console.log(thing.description);
    }
    }
  } 
};

// 10. Log the name and description of the people in house Lannisters whose name is `Tywin Lannister`

for ( let allName of got.houses) {
	if (allName.name == "Lannisters") {
  	for (let thing of allName.people) {
    if ( thing.name == "Tywin Lannister") {
     console.log(thing.name);
     console.log(thing.description);
    }
    }
  } 
};



// 11. Push the name of the houses in an array named `houseNames` and Log the array

let houseName = [];

for (let item of got.houses) {
	houseName.push(item.name);
  
} console.log(houseName);


// 12. Log the size of people in Starks house

for (let house of got.houses) {
	if ( house.name == "Starks") {
  	console.log(house.people.length)
  }
  
}


// 13. Log the size of people in Lannisters house

for (let house of got.houses) {
	if ( house.name === "Lannisters") {
  	console.log(house.people.length)
  }
  
}


// 14. Add the name and size of people in an object like {Starks: 4, Lannisters: 6} and log the object
let obj = {} ;
for (let house of got.houses) {
  obj.name = obj.people.length;
}


// 15. Log the name of all the people of all the houses in got one by one

for (let house of got.houses) {
  for (let allName of house.people) {
  console.log(allName.name);
  }
} 


// 16. Push all names into a new array named `allPeople` and log the value array.

let allPeople = [];
for (let house of got.houses) {
  for (let allName of house.people) {
    allPeople.push(allName.name);
  }
}
// 17. Log the value and length of `allPeople` array created above

// let allPeople = [];
// for (let house of got.houses) {
//   for (let allName of house.people) {
//     allPeople.push(allName.name);
//   }
// }

console.log(allPeople);
console.log(allPeople.length);


// 18. Push all descriptions into an array named `allDescription`

let allDescription = [];
for (let house of got.houses) {
  for (let allPeople of house.people) {
   allDescription.push(allPeople.description);
  }
}


// 19. Log the value and length `allDescription`

console.log(allDescription);
console.log(allDescription.length);



// 20. Only the the description whose length is more than 30. (use .length property on string to get the length)

let allDescription = [];
for (let house of got.houses) {
 for (let allPeople of house.people) {
    
  if ( allPeople.description.length > 30) {
    console.log(allPeople.description);
  } 
 } 
}