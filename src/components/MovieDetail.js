import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MovieDetail extends Component {
    render() {
        const movies = this.props.movie
        const user = this.props.user
        const url = `/${user}/catalog/`

        return <div className="MovieDetail" key={movies.id} >
            <div id="main-links"><Link to={url}>Catalog</Link></div>
            <p>{movies.title} ,{movies.year}</p>
            <img className="detail-img" src={movies.img} alt="" />
            <h5>{movies.descrShort} </h5>
        </div>
    }
}

export default MovieDetail;