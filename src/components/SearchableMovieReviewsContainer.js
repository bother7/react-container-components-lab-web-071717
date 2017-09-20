// Code SearchableMovieReviewsContainer Here
import React from 'react'
import MovieReviews from './MovieReviews';

export default class SearchableMovieReviewsContainer extends React.Component {
constructor (props) {
  super(props)

  this.state = {
    searchTerm: "",
    reviews: []
  }
}
render () {
  return <div className="searchable-movie-reviews"><MovieReviews reviews={this.state.reviews} /></div>
}
}
