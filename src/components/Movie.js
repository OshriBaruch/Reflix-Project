import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Movie extends Component {
    updateRented = () => this.props.updateRented(this.props.movie.id)

    render() {
        const movie = this.props.movie
        const user = this.props.user
        const url = `/${user.name}/catalog/${movie.title}`

        return <div className="movie-box">
            <span
                onClick={this.updateRented}
                className={
                    movie.isRented === true ? "sing fas fa-minus-circle" : "sing fas fa-plus-circle"// ( - or + )
                }></span>
            <Link to={url}>
                <img src={movie.img} alt="" />
            </Link>
        </div>
    }
}

export default Movie;