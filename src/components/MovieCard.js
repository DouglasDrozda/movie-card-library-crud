import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath, id } = movie;
    return (
      <div className="movieList-contain">
        <div className="movieCard" data-testid="movie-card">
          <h1>{ title }</h1>
          <h4>{ subtitle }</h4>
          <p className="storyline">{ storyline }</p>
          <img className="imgMovies" src={ imagePath } alt={ title } />
          <div className="rating-contain">
            <p>Avaliação:</p>
            <p className="rating">{ rating }</p>
          </div>
          <Link className="details" to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
  }),
}.isRequired;

export default MovieCard;
