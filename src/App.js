import logo from "./logo.svg";
import SearchMovies from "./components/SearchMovies";
import "./App.css";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovies />
    </div>
  );
}

export default App;
