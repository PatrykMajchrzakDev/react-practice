import { useState, useEffect, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";
function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    //setError to clear any potential earlier errors
    setIsError(null);

    try {
      //https://swapi.dev/api/films
      const response = await fetch(
        "https://react-star-wars-api-c81ba-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setIsError(error.message);
    }
    setIsLoading(false);
  }, []);

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-star-wars-api-c81ba-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // let content = <p>Movies not found.</p>

  // if(movies.length > 0){
  //   <MoviesList movies={movies}/>
  // }
  // if(isError){
  //   content = <p>{isError}</p>
  // }
  // if(isLoading){
  //   content = <p>Loading...</p>
  // }
  //And change section with conditionals with {content}

  return (
    <>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !isError && (
          <p>No movies found.</p>
        )}
        {isLoading && <p>Loading...</p>}
        {!isLoading && isError && <p>{isError}</p>}
        {/* <section>{content}</section> */}
      </section>
    </>
  );
}

export default App;
