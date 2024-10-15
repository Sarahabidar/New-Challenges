import MovieItem from "./MovieItem";
import "./style.css";

export default function MovieList(props) {
  const { title, dataitems } = props;
  function renderFarm() {
    return dataitems.data.map(function (item, i) {
      const { Title, Genre, Poster } = item;
      return <MovieItem name={Title} genre={Genre} poster={Poster}></MovieItem>;
    });
  }
  return (
    <div className="movie-list">
      <h2>{title}</h2>
      <ul>{renderFarm()}</ul>
    </div>
  );
}
