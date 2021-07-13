import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactSlider from '../ReactSlider'
import Footer from '../Footer'
import Header from '../Header'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
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
  state = {HomePageRandomMovie: [], isLoading: true}

  componentDidMount() {
    this.getMovieDetails()
  }

  getMovieDetails = async () => {
    const randomNumber = Math.ceil(Math.random() * 20)
    const MoviesUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=b0c10bd24207804b5bc4163824d992f7`
    const requestToken = Cookies.get('request_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${requestToken}`,
      },
    }
    const response = await fetch(MoviesUrl, options)
    const data = await response.json()

    this.setState({
      HomePageRandomMovie: data.results[randomNumber],
      isLoading: false,
    })
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

  renderHomePage = () => (
    <>
      <div className="home-page-top-section">{this.renderBackdropPoster()}</div>
      {allMoviesCategory.map(category => (
        <ReactSlider category={category} />
      ))}
      <Footer />
    </>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-page-container">
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="TailSpin" color="red" height={50} width={100} />
          </div>
        ) : (
          this.renderHomePage()
        )}
      </div>
    )
  }
}
export default Home
