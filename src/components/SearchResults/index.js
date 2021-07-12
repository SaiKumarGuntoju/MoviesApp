import {Component} from 'react'
import Header from '../Header'
import './index.css'

class SearchResults extends Component {
  state = {searchedResultsList: []}

  componentDidMount() {
    this.getSearchedResults()
  }

  getSearchedResults = async () => {
    const {match} = this.props
    const {params} = match
    const {value} = params
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=b0c10bd24207804b5bc4163824d992f7&language=en-US&query=${value}&page=1`
    const response = await fetch(searchUrl)
    const data = await response.json()
    this.setState({searchedResultsList: data.results})
  }

  renderSearchedResults = () => {
    const {searchedResultsList} = this.state
    return (
      <>
        {searchedResultsList.map(movie => (
          <img
            alt="ssd"
            className="searched-image"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        ))}
      </>
    )
  }

  render() {
    return (
      <>
        <div style={{backgroundColor: 'black'}}>
          <Header />
        </div>

        <div className="searched-results-container">
          {this.renderSearchedResults()}
        </div>
      </>
    )
  }
}

export default SearchResults
