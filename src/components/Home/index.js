import {Component} from 'react'
import ReactSlider from '../ReactSlider'
import Footer from '../Footer'
import Header from '../Header'
import './index.css'

const allMoviesCategory = [
  {
    name: 'Trending',
    url:
      'https://api.themoviedb.org/3/trending/all/week?api_key=b0c10bd24207804b5bc4163824d992f7',
  },
  {
    name: 'Top Rated',
    url:
      'https://api.themoviedb.org/3/movie/top_rated?api_key=b0c10bd24207804b5bc4163824d992f7&language=en-US',
  },

  {
    name: 'Original',
    url: `https://api.themoviedb.org/3/discover/tv?api_key=b0c10bd24207804b5bc4163824d992f7`,
  },
]

class Home extends Component {
  state = {HomePageRandomMovie: []}

  componentDidMount() {
    this.getMovieDetails()
  }

  getMovieDetails = async () => {
    const randomNumber = Math.ceil(Math.random() * 20)
    const MoviesUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=b0c10bd24207804b5bc4163824d992f7`
    const response = await fetch(MoviesUrl)
    const data = await response.json()

    this.setState({HomePageRandomMovie: data.results[randomNumber]})
  }

  renderBackdropPoster = () => {
    const {HomePageRandomMovie} = this.state
    const imageUrl = `https://image.tmdb.org/t/p/original/${HomePageRandomMovie.backdrop_path}`
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
        <Header />
        <div className="movie-details-container">
          <h1 className="movie-title">{HomePageRandomMovie.title}</h1>
          <p className="movie-description">{HomePageRandomMovie.overview}</p>
          <button type="button">Play</button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="home-page-container">
        <div className="home-page-top-section">
          {this.renderBackdropPoster()}
        </div>
        {allMoviesCategory.map(category => (
          <ReactSlider category={category} />
        ))}
        <Footer />
      </div>
    )
  }
}
export default Home
