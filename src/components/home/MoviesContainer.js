import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

class MoviesContainer extends Component {

    render() {
        const {movies} =this.props;
        return (
            <div className='row'>
                {movies.Response==='True' ? movies.Search.map((movie, index)=>
                    <MovieCard key={index} movie={movie} />
                ) : <h2>{movies.Error}</h2>}
            </div>
        )
    }
}

const mapStateToProps=state=>({
    movies:state.movies.movies,
})

export default connect(mapStateToProps)(MoviesContainer);