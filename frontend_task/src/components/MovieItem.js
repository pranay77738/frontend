import React, { Component } from "react";
import { addToFavorite, removeFromFavorite } from "../actions";
import { connect } from "react-redux";

const urlComponent = "https://image.tmdb.org/t/p/w342";
const movieUrl = "https://www.themoviedb.org/movie/";

class MovieItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorited: false,
    };
  }

  addToFavorite() {
    this.setState({ favorited: !this.state.favorited });
    this.props.addToFavorite(this.props.movie);
  }

  removeFromFavorite() {
    this.setState({ favorited: !this.state.favorited });
    this.props.removeFromFavorite(this.props.movie);
  }

  displayFav() {
    if (!this.state.favorited) {
      return (
        <span
          className="glyphicon glyphicon-heart-empty"
          onClick={() => this.addToFavorite()}
        ></span>
      );
    } else {
      return (
        <span
          className="glyphicon glyphicon-heart"
          onClick={() => this.removeFromFavorite()}
        ></span>
      );
    }
  }
    render() {
        console.log(this.props);
        return (
            <div className="col-sm-12 col-sm-3">
                <div className="thumbnail">
                    <img
                        src={urlComponent + this.props.movie.poster_path}
                        alt={this.props.movie.title + " Image"}
                    />
                    <div className="caption">
                        <h3>{this.props.movie.title}</h3>
                        <p>{this.props.movie.overview}</p>
                        <p>Realease Date - {this.props.movie.release_date}</p>
                        <p>
                            Ratings -{" "}
                            <span className="badge badge-default">
                                <span
                                    className="glyphicon glyphicon-star"
                                    aria-hidden="true"
                                ></span>
                                {this.props.movie.vote_average}
                            </span>{" "}
                        </p>
                        <p>{this.displayFav()}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(null, { addToFavorite })(MovieItem);