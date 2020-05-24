import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/searchActions';

class SearchForm extends Component {

    handleChange=(e)=>{
        this.props.searchMovie(e.target.value);
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    }
    
    
    render() {
        console.log(this.props.movies[0]);
        return (
            <div className='jumbotron jumbotron-fluid mt-5 text-center'>
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search" />
                        Search for a movie, TV Series ...
                    </h1>
                    <form action="" id="searchForm" onSubmit={this.handleSubmit}>
                        <input type="text" 
                        name='searchText'
                        onChange={this.handleChange}
                        className='form-control' 
                        placeholder='Search Movies, TV Series ...'
                        />
                        <button type='submit' className="btn btn-primary btn-lg mt-3">
                            Search
                        </button>
                    </form>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps=state=>({
    text: state.movies.text,
    movies: state.movies.movies

})

const mapActionToProps={
    searchMovie: actions.searchMovie,
    fetchMovies: actions.fetchMovies,
    setLoading: actions.setLoading
}

export default connect(mapStateToProps, mapActionToProps)(SearchForm);