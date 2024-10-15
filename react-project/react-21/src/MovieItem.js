export default function MovieItem(props) {
  const { name, genre, poster } = props;
  return (
    <li>
      <img src={poster} alt={`Poster of ${name}`} />
      <h3>{name}</h3>
      <p>{genre}</p>
    </li>
  );
}
