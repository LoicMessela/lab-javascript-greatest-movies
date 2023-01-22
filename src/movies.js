// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const newArray = moviesArray.map((movie) => movie.director);
  return newArray;
}

//console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDrama = moviesArray.filter((movie) => {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return true;
    }
  });
  return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray === []) {
    return null;
  }
  let result = 0;
  const sumMovie = moviesArray.reduce((acc, movie) => acc + movie.score, 0);

  const avg = sumMovie / moviesArray.length;

  return Number(avg.toFixed(2));
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray === []) {
    return null;
  }
  let result = 0;
  const dramaMovies = moviesArray.filter((movie) => {
    if (movie.genre.includes("Drama")) {
      return true;
    }
  });

  const avgDrama = dramaMovies.reduce((acc, movie) => acc + movie.score, 0);

  const avgOverall = avgDrama / dramaMovies.length;

  return Number(avgOverall.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let result = [];

  const releasedYear = moviesArray.map((movie) => movie);

  return releasedYear.sort((a, b) => a - b);
}

console.log(orderByYear(movies));
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  let result = [];
  const alphaOrder = moviesArray.map((movie) => movie);
  const newAlpha = alphaOrder.sort((a, b) => a.title - b.title);

  return newAlpha.slice(0, 20);
}
console.log(orderAlphabetically(movies));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
