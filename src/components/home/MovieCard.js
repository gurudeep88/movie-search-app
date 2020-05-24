import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MovieCard extends Component {

    render() {
        const {movie}=this.props;
        return (
            <>
                <div className="col-md-3 mb-5">
                    <div className="card card-body bg-dark text-center h-100">
                        <img src={movie.Poster} alt="Movie Cover" className="w-100 mb-2"/>
                        <h5 className="text-light card-title">
                            {movie.Title} - {movie.Year} 
                        </h5>
                        <Link to={'/movie/'+movie.imdbID} className="btn btn-primary">
                            Movie Details
                            <i className="fa fa-chevron-right ml-4" />
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default MovieCard;