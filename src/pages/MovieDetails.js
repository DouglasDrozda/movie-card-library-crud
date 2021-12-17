import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.setAPI();
  }

  setAPI = () => {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true }, () => {
      movieAPI.getMovie(id).then((data) => {
        this.setState({ movies: data, loading: false });
      });
    });
  }

  deleteMovie = () => {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id).then(() => {
      this.setState({
        redirect: true,
      });
    });
  }

  render() {
    // Change the condition to check the state
    const { loading, movies, redirect } = this.state;
    if (loading) return <Loading />;
    if (redirect) return <Redirect />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movies;
    return (
      <section className="movieList-contain">
        <div className="movieCard" data-testid="movie-details">
          <img className="imgMoviesDetails" alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Subtitle: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p className="storyline">{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <div className="buttonsDetails">
            <Link className="edit" to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link className="back" to="/">VOLTAR</Link>
            <Link className="delete" to="/" onClick={ this.deleteMovie }>DELETAR</Link>
          </div>
        </div>
      </section>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
