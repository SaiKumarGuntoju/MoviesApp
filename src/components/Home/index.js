import {Component} from 'react'
import ReactSlider from '../ReactSlider'
import Header from '../Header'
import './index.css'

const allMoviesCategory = [
  'https://api.themoviedb.org/3/movie/top_rated?api_key=b0c10bd24207804b5bc4163824d992f7&language=en-US',

  'https://api.themoviedb.org/3/trending/all/week?api_key=b0c10bd24207804b5bc4163824d992f7',
]

class Home extends Component {
  render() {
    return (
      <div className="home-page-container">
        <div className="home-page-top-section">
          <Header />
        </div>
        {allMoviesCategory.map(category => (
          <ReactSlider category={category} />
        ))}
      </div>
    )
  }
}
export default Home
