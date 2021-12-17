import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.setAPI();
  }

  setAPI = () => {
    this.setState({ loading: true }, () => {
      movieAPI.getMovies().then((data) => {
        this.setState({ movies: data, loading: false });
      });
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />;
    }

    return (
      <section>
        <div className="movieList-contain" data-testid="movie-list">
          {loading ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <div className="addCard-contain">
          <Link className="addCard" to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </section>
    );
  }
}

export default MovieList;
