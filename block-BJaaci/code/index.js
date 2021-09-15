let movies = [
  {
    id: '1',
    title: 'Game Night',
    year: '2018',
    genres: ['Action', 'Comedy', 'Crime'],
    releaseDate: '2018-02-28',
    actors: ['Rachel McAdams', 'Jesse Plemons', 'Jason Bateman'],
  },
  {
    id: '2',
    title: 'Area X: Annihilation',
    year: '2018',
    genres: ['Adventure', 'Drama', 'Fantasy'],
    releaseDate: '2018-02-23',
    actors: ['Tessa Thompson', 'Jennifer Jason Leigh', 'Natalie Portman'],
  },
  {
    id: '3',
    title: 'Hannah',
    year: '2017',
    genres: ['Drama'],
    releaseDate: '2018-01-24',
    actors: ['Charlotte Rampling', 'Andr Wilms', 'Phanie Van Vyve'],
  },
];

/*
Go through the variable named movies properly before solving the exercises.
Use the variable named movies to solve the requirement below.
*/

// 1. Log the value of the title key in the first movie of the array named `movies`
console.log(movies[0].title, "Question 1"); 


// 2. Log the value of the title key in the last movie of the array named `movies`
console.log(movies[movies.length - 1].title, "Question 2"); 


// 3. Log the value of the title key in the second movie (index 1) of the array named `movies`
console.log(movies[1].title, "Question 3");


// 4. Log the value of the year key in the first movie of the array named `movies`
console.log(movies[0].year, "Question 4"); 


// 5. Log all the named of actors (key named actors) of the first movie
for ( let item of movies[0].actors) {
  console.log(item, "Question 5"); 
}


// 6. Log the name of the first actor of the first movie
console.log(movies[0].actors[0], "Question 6");


// 7. Log the name of the last actor of the first movie
console.log(movies[0].actors[movies[0].actors.length - 1], "Question 7");


// 8. Log the name of the second actor (index 1) of the first movie
console.log(movies[0].actors[1], "Question 8");


// 9. Log the name of the second actor (index 1) of the second movie
console.log(movies[1].actors[1], "Question 9");


// 10. Log the name of the last actor of the thrid movie
console.log(movies[movies.length - 1].actors[movies[movies.length - 1].actors.length - 1], "Question 10");


// 11. Log the name of the second actor (index 1) of the third movie
console.log(movies[movies.length - 1].actors[1], "Question 11");


// 12. Log all the genres of the third movie
for (let item of movies[2].genres) {
  console.log(item, "Question 12");
}


// 13. Log all the genres of the first movie
for (let item of movies[0].genres) {
  console.log(item, "Question 13");
}


// 14. Log the first genres of the first movie
console.log(movies[0].genres[0], "Question 14");


// 15. Log the first genres of the second movie
console.log(movies[1].genres[0], "Question 15");


// 16. Log the last genres of the first movie (using the length property of array)
console.log(movies[0].genres[movies[0].genres.length - 1], "Question 16");


// 17. Log the first genres of the second movie (using the length property of array)
console.log(movies[movies.length - 2].genres[0], "Question 17");


// 18. Log all the genres of the first movie one by one

for (let item of movies[0].genres) {
  console.log(item, "Question 18");
} 

// 19. Log all the genres of the second movie one by one
for (let item of movies[1].genres) {
  console.log(item, "Question 19");
}

// 20. Log if the first actor of the first movie is `Rachel McAdams` or not (You have to log true or false)
if ( movies[0].actors[0] == "Rachel McAdams" ) {
  console.log(true, "Question 20");
} else {
  console.log(false , "Question 20");
}

// 21. Log if the second actor (index 1) of the second movie is `Natalie Portman` or not (You have to log true or false)
if ( movies[1].actors[1] == "Natalie Portman" ) {
  console.log(true, "Question 281");
} else {
  console.log(false, "Question 21");
}

// 22. Log if the year of all three movies is greater than `2017` or not one by one. (Log true or false)
for (let movie in movies) {
  if ( movie.year > 2017) {
    console.log(movie.title, "Question 22");
  } else {
    console.log(false, "Question 22");
  }
}

// 23. Log the title of all three movies one by one.
for ( let movie of movies) {
  console.log(movie.title, "Question 23");
}

// 24. Log if the title of the first movie is `Hannah` or not
if (movies[0].title == "Hannah") {
  console.log(true, "Question 24");
} else {
  console.log(false, "Question 24");
}


// 25. Log the number of actors in all three movies one by one
for (let movie of movies) {
  console.log(movie.actors.length, "Question 25");
}
// 26. Log the number of genres in all three movies one by one
for (let movie of movies) {
  console.log(movie.genres.length, "Question 26");
}

// 27. Log the name of all the movies with more than 1 genre
for (let movie of movies) {
  if (movie.genres.length > 1 ) {
    console.log(movie.title, "Question 27");
  }
}


// 28. Log the name of all the movies with more than 1 actors
for (let movie of movies) {
  if (movie.actors.length > 1 ) {
    console.log(movie.title , "Question 28");
  }
}

// 29. Log the name of all the movies with exactly 3 actors
for (let movie of movies) {
  if (movie.actors.length === 3 ) {
    console.log(movie.title, "Question 29");
  }
}


// 30. Log the name of all the movies with year `2018`
for (let movie of movies) {
  if (movie.year === 2018 ) {
    console.log(movie.title, "Question 30");
  }
}