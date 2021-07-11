import {Component} from 'react'
import './index.css'

class SpecificMovie extends Component {
  state = {movieDetails: []}

  componentDidMount() {
    this.getMovieDetails()
  }

  getMovieDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const getMovieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=b0c10bd24207804b5bc4163824d992f7&language=en-US`
    const response = await fetch(getMovieUrl)
    const data = await response.json()
    console.log(data)
    this.setState({movieDetails: data})
  }

  renderMoreMovies = () => {
    const {movieDetails} = this.state
    return <h1>helloo</h1>
  }

  renderBackdropPoster = () => {
    const {movieDetails} = this.state
    const imageurl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`
    return (
      <div
        className="backdrop-poster-container"
        style={{
          backgroundImage: `url(${imageurl})`,
          height: 500,
          width: '100vw',
          backgroundSize: 'cover',
        }}
      >
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
        {this.renderMoreMovies()}
      </div>
    )
  }
}
export default SpecificMovie
