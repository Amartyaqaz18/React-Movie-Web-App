import React, { Component } from 'react'
//import {movies} from './getMovies';
import axios from 'axios';
export default class Banner extends Component {
  constructor(){
    super();
    this.state={
        movies:[],
        currPage:1
    }
}
  async componentDidMount(){
    const res=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=6e2e1c999ae47325ddc250a51ea62060&language=en-US&page=${this.state.currPage}`)
    let data=res.data
    this.setState({
      movies:[...data.results]
    })
  }  

  render() {
    
    let movie=this.state.movies
    
    return (
        <>
        {
            movie==''?
            <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>:
            <div className="card banner-card">
            <img src={`https://image.tmdb.org/t/p/original${movie[1].backdrop_path}`}   alt={movie[1].title} className="card-img-top banner-img"/>
            {/*<div class="card-body">*/}
              <h1 className="card-title banner-title">{movie[1].original_title}{movie[1].original_name}</h1>
              <p className="card-text banner-text">{movie[1].overview}</p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            {/*</div>*/}
          </div>
  }
      </>
    )
  }
}
