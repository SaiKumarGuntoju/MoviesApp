import {Component} from 'react'
import {BiChevronRightSquare, BiChevronLeftSquare} from 'react-icons/bi'
import Header from '../Header'
import './index.css'

class Popular extends Component {
  state = {popularMovies: [], pageNumber: 1}

  componentDidMount() {
    this.getPopularMovies()
  }

  getPopularMovies = async () => {
    const {pageNumber} = this.state
    const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=b0c10bd24207804b5bc4163824d992f7&language=en-US&page=${pageNumber}`
    const response = await fetch(popularMoviesUrl)
    const data = await response.json()
    this.setState({popularMovies: data.results})
  }

  onClickDecrement = () => {
    const {pageNumber} = this.state
    if (pageNumber > 1) {
      this.setState(
        prevState => ({pageNumber: prevState.pageNumber - 1}),
        this.getPopularMovies,
      )
    }
  }

  onClickIncrement = () => {
    const {pageNumber} = this.state
    if (pageNumber < 500) {
      this.setState(
        prevState => ({pageNumber: prevState.pageNumber + 1}),
        this.getPopularMovies,
      )
    }
  }

  renderPageNumberSection = () => {
    const {pageNumber} = this.state
    return (
      <div className="pageNumber-container">
        <BiChevronLeftSquare onClick={this.onClickDecrement} className="page" />
        <p className="page">
          <span>{pageNumber} of 20</span>
        </p>
        <BiChevronRightSquare
          onClick={this.onClickIncrement}
          className="page"
        />
      </div>
    )
  }

  renderPopularMovies = () => {
    const {popularMovies} = this.state
    return (
      <>
        {popularMovies.map(movie => {
          const movieImage = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
          return (
            <img
              className="popular-image"
              alt="popular-movie"
              src={movieImage}
            />
          )
        })}
      </>
    )
  }

  render() {
    return (
      <div>
        <Header />
        <div className="popularMovies-body-section">
          <div className="popular-movies-list">
            {this.renderPopularMovies()}
          </div>

          {this.renderPageNumberSection()}
        </div>
      </div>
    )
  }
}
export default Popular
