import {Component} from 'react'
import {Link} from 'react-router-dom'
import Headers from '../Header'
import './index.css'

class SpecificMovie extends Component {
  state = {movieDetails: [], similarMoviesList: []}

  componentDidMount() {
    this.getMovieDetails()
    this.getSimilarMovies()
  }

  getSimilarMovies = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const similarMoviesUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=b0c10bd24207804b5bc4163824d992f7&language=en-US&page=1`
    const similarMoviesResponse = await fetch(similarMoviesUrl)
    const similarMoviesData = await similarMoviesResponse.json()
    this.setState({similarMoviesList: similarMoviesData.results})
  }

  getMovieDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const getMovieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=b0c10bd24207804b5bc4163824d992f7&language=en-US`
    const response = await fetch(getMovieUrl)
    const data = await response.json()

    this.setState({movieDetails: data}, this.componentDidMount)
  }

  renderMoreMovies = () => {
    const {similarMoviesList} = this.state
    return (
      <>
        {similarMoviesList.map(eachMovie => {
          const similarMovieImageUrl = `https://image.tmdb.org/t/p/original/${eachMovie.poster_path}`
          const moviePath = `/movie/${eachMovie.id}`
          return (
            <Link to={moviePath}>
              <img
                className="similar-image"
                alt="similarMovie"
                src={similarMovieImageUrl}
              />
            </Link>
          )
        })}
      </>
    )
  }

  renderBackdropPoster = () => {
    const {movieDetails} = this.state
    const imageUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`
    return (
      <div
        className="backdrop-poster-container"
        style={{
          backgroundImage: `url(${imageUrl})`,
          height: 500,
          width: '100vw',
          backgroundSize: 'cover',
        }}
      >
        <Headers />
        <div className="movie-details-container">
          <h1 className="movie-title">{movieDetails.title}</h1>
          <p className="movie-description">{movieDetails.overview}</p>
          <button type="button">Play</button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderBackdropPoster()}
        <ul className="similar-movies-container">{this.renderMoreMovies()}</ul>
      </div>
    )
  }
}
export default SpecificMovie
